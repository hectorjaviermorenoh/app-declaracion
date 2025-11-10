import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useBackends } from "./BackendsContext";
import { jwtDecode } from "jwt-decode";
import { useToast } from "../context/ToastContext";

// 📦 Clave para persistir sesión
const STORAGE_KEY = "auth_session";

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
      showToast(mensaje, tipo, 4000, "Autenticación");
      logout();
      onComplete();
    };

    if (!backendUrl) {
      handleFail("⚠️ No hay backend activo. No se puede autenticar.", "warning");
      return;
    }


    try {
      // 🔍 Decodificar token localmente
      const decoded = jwtDecode(idToken);

      // ⏰ Verificar si el token expiró
      if (decoded.exp * 1000 < Date.now()) {
        handleFail("⚠️ Token expirado localmente. Inicia sesión nuevamente.", "warning");
        return;
      }
      const userLocal = {
        correo: decoded.email,
        nombre: decoded.name,
        picture: decoded.picture,
        autorizado: true,
      };

      // 🔒 Validar token contra el backend
      const resp = await fetch(`${activeBackend.url}?accion=ping&token=${idToken}`);
      const data = await resp.json();

      if (data && (data.status === "ok" || data.autorizado)) {

        const userFull = {
          ...userLocal,
          rol: data.rol || "sin rol",
          permisos: data.permisos || [],
        };

        showToast(`👋 Bienvenido ${userFull.nombre}`, "success", 3000, "Autenticación");

        setAuthToken(idToken);
        setUser(userFull);
        setAuthenticated(true);
        persistSession(idToken, userFull);

        onComplete(); // 👈 Llamar después del éxito, antes de la navegación
        navigate("/productos"); // ✅ Redirigir inmediatamente tras login
        // navigate("/admin"); // ✅ Redirigir inmediatamente tras login
      } else {
        console.error("❌ Token no autorizado:", data.mensaje);
        showToast(data.mensaje || "❌ Token no autorizado", "danger", 4000, "Autenticación");
        logout();
        onComplete(); // 👈 Llamar después de logout
      }
    } catch (err) {
      console.error("Error verificando token:", err);
      handleFail("❌ Error verificando token con el backend");
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

  // 🔄 Verificar token manualmente (opcional, útil al recargar)
  const verifyToken = useCallback(async () => {
    if (!authToken || !activeBackend?.url) return false;
    try {
      const resp = await fetch(`${activeBackend.url}?accion=ping&token=${authToken}`);
      const data = await resp.json();
      if (data && (data.status === "ok" || data.autorizado)) {
        setUser((prev) => ({
          ...prev,
          rol: data.rol || prev?.rol,
          permisos: data.permisos || prev?.permisos,
        }));
        setAuthenticated(true);
        return true;
      } else {
        if (authenticated) {
          showToast("⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.", "warning", 4000, "Autenticación");
        }
        logout();
        return false;
      }
    } catch (err) {
      console.log("auth184", err.message);
      showToast("⚠️ Token inválido o expirado. Debes iniciar sesión nuevamente.", "warning", 4000, "Autenticación");
      logout();
      return false;
    }
  }, [authToken, activeBackend, logout, showToast]);

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
        const decoded = jwtDecode(authToken);
        if (decoded.exp * 1000 < Date.now()) {
          showToast("⚠️ Token expirado localmente. Cerrando sesión...", "warning", 4000, "Autenticación");
          logout();
        }
      } catch (err) {
        console.error("Error verificando expiración local del token:", err);
        logout();
      }
    };

    const interval = setInterval(checkExpiration, 60 * 1000); // cada 1 minuto
    checkExpiration(); // ejecutar una vez al inicio
    return () => clearInterval(interval);
  }, [authToken, logout]);

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
