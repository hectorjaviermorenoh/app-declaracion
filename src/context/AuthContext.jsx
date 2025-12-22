import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useBackends } from "./BackendsContext";
// import { jwtDecode } from "jwt-decode";
import { useToast } from "../context/ToastContext";

// 📦 Clave para persistir sesión
const STORAGE_KEY = "auth_session";


//  helper para decodificar Base64URL
function base64UrlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) {
    str += '=';
  }
  return atob(str);
}

// Crear contexto
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;

  const navigate = useNavigate();

  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);

  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);


  // 🧠 Cargar token desde localStorage una sola vez al montar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.token) {
          setAuthToken(parsed.token);
          setUser(parsed.user || null);
          setAuthenticated(true);
        }
      } catch (err) {
        console.error("Error parseando sesión guardada:", err);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  // 🧩 Guardar sesión persistente
  const persistSession = (token, userData) => {
    if (!token) return;
    const session = {
      token,
      user: userData || null,
      backendUrl: backendUrl,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  };


// 🚀 Iniciar sesión
  const login = async (idToken, onComplete = () => {}) => {

    const handleFail = (mensaje, tipo = "danger") => {
      console.log(mensaje);
      showToast(mensaje, tipo, 4000, "Autenticación");
      logout(); // 👈 Llama a logout para limpiar
      onComplete();
    };

    if (!backendUrl) {
      handleFail("⚠️ No hay backend activo. No se puede autenticar.", "warning");
      return;
    }

    try {
      // 🔒 Intercambiar el token de Google por un token de sesión propio
      const resp = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accion: "googleLogin",
          googleToken: idToken // 👈 Enviamos el token de Google
        })
      });

      const data = await resp.json();


      // Si el backend nos rechaza (token G inválido, usuario no activo, etc.)
      if (!data || data.status !== "ok" || !data.token || !data.user) {
        handleFail(data.mensaje || "❌ Error de autenticación desde el backend");
        return;
      }

      // ✅ ÉXITO: El backend nos da nuestro token propio y datos de usuario
      const { token: tokenPropio, user: userInfo } = data;

      showToast(`👋 Bienvenido ${userInfo.nombre}`, "success", 3000, "Autenticación");

      // Guardamos el token PROPIO
      setAuthToken(tokenPropio);
      setUser(userInfo);
      setAuthenticated(true);
      persistSession(tokenPropio, userInfo); // 👈 Persistimos el token propio

      onComplete();
      navigate("/productos");

    } catch (err) {
      console.error("Error en login (intercambio de token):", err);
      handleFail("❌ Error de conexión con el backend");
    }
  };

  // 🚪 Cerrar sesión
  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthToken(null);
    setUser(null);
    setAuthenticated(false);

    // 🔁 Redirige siempre al login
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true }); // replace evita volver atrás con el navegador
    }

    showToast("👋 Sesión cerrada correctamente", "info", 3000, "Autenticación");

  }, [navigate, showToast ]);

// 🔄 Verificar token (ahora valida el token PROPIO contra el 'ping')
  const verifyToken = useCallback(async () => {
    if (!authToken || !activeBackend?.url) return false;

    try {
      // Esta llamada ahora envía el TOKEN PROPIO
      // El backend (doGet -> ping) lo validará (firma, expiración)
      const resp = await fetch(`${activeBackend.url}?accion=ping&token=${authToken}`);
      const data = await resp.json();

      // Si el backend dice "ok", el token es válido
      if (data && (data.status === "ok" || data.autorizado)) {

        // Refrescamos los datos del usuario (rol, permisos) desde el token
        setUser((prev) => ({
          ...prev, // Mantiene datos que no estén en el token (si los hubiera)
          correo: data.correo,
          nombre: data.nombre,
          picture: data.picture,
          rol: data.rol,
          permisos: data.permisos,
        }));
        setAuthenticated(true);
        return true;

      } else {
        // El backend rechazó el token (expirado, inválido)
        if (authenticated) {
          showToast(data.mensaje || "⚠️ Tu sesión ha expirado.", "warning", 4000, "Autenticación");
        }
        logout();
        return false;
      }
    } catch (err) {
      // Error de red o similar
      console.log("auth184 (verifyToken)", err.message);
      showToast("⚠️ Error de conexión. No se pudo verificar la sesión.", "warning", 4000, "Autenticación");
      logout(); // Asumimos lo peor y cerramos sesión
      return false;
    }
  }, [authToken, activeBackend, logout, showToast, authenticated]);

  // 🧠 Verificar token automáticamente al cargar (una vez)
  useEffect(() => {
    if (authToken && !authenticated) {
      verifyToken();
    }
  }, [authToken, authenticated, verifyToken]);

  // ⏳ Revalidar token cada cierto tiempo (5 min)
  useEffect(() => {
    if (!authToken) return;

    const interval = setInterval(async () => {
      const ok = await verifyToken();
      if (!ok) {
        console.warn("⚠️ Token expirado. Cerrando sesión automáticamente...");
        logout();
      }
    }, 5 * 60 * 1000); // cada 5 minutos

    return () => clearInterval(interval);
  }, [authToken, verifyToken, logout]);

  // 🔄 Revalidar token si cambia el backend activo
  useEffect(() => {
    if (authToken && activeBackend?.url) {
      verifyToken();
    }
  }, [activeBackend?.url, authToken, verifyToken]);

  // 🧭 Verificar expiración local del token cada minuto
  useEffect(() => {
    if (!authToken) return;

    const checkExpiration = () => {
      try {
        // El token es [payload].[signature]
        const payloadB64 = authToken.split('.')[0];
        if (!payloadB64) {
           logout();
           return;
        }

        const payloadStr = base64UrlDecode(payloadB64); // 👈 USA NUESTRO HELPER
        const decoded = JSON.parse(payloadStr);

        if (decoded.exp * 1000 < Date.now()) {
          showToast("⚠️ Token expirado localmente. Cerrando sesión...", "warning", 4000, "Autenticación");
          logout();
        }
      } catch (err) {
        console.error("Error verificando expiración local del token propio:", err);
        logout(); // Si está malformado, cerramos sesión
      }
    };

    const interval = setInterval(checkExpiration, 60 * 1000); // cada 1 minuto
    checkExpiration(); // ejecutar una vez al inicio
    return () => clearInterval(interval);
  }, [authToken, logout, showToast]);

  // 🧭 Escuchar eventos globales emitidos por apiClient.js (auth:required)
  useEffect(() => {
    function onAuthRequired(e) {
      const msg = e?.detail?.message || "⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.";
      console.warn("🟡 Evento auth:required recibido:", msg);

      // Evita múltiples cierres simultáneos (solo si ya estaba autenticado)
      if (authenticated) {
        // showToast(msg, "warning", 4000, "Autenticación 269");
        logout();
      }
    }

    window.addEventListener("auth:required", onAuthRequired);
    return () => window.removeEventListener("auth:required", onAuthRequired);
  }, [authenticated, logout, showToast]);



  const value = {
    authToken,
    user,
    authenticated,
    loading,
    login,
    logout,
    verifyToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}
