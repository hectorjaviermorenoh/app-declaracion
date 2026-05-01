import React, { createContext, useContext, useEffect, useState, useCallback, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useBackends } from "./BackendsContext";
import { useToast } from "../context/ToastContext";
import { confirmarAccion } from "../utils/alerts.js";

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
  const authRef = useRef(authenticated);

  const backendUrlRef = useRef(backendUrl);

  useEffect(() => {
    backendUrlRef.current = backendUrl;
  }, [backendUrl]);

  // 🚪 Cerrar sesión
  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthToken(null);
    setUser(null);
    setAuthenticated(false);

    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }

    window.googleInitialized = false;

    if (window.location.pathname !== "/") {
      navigate("/", { replace: true }); // replace evita volver atrás con el navegador
    }

    showToast("👋 Sesión cerrada correctamente", "info", 3000, "Autenticación");
  }, [navigate, showToast ]);

  // 🔄 Verificar token (ahora valida el token PROPIO contra el 'ping')
  const verifyToken = useCallback(async () => {
    const currentUrl = backendUrlRef.current;
    if (!authToken || !currentUrl) return false;

    try {
      const resp = await fetch(`${currentUrl}?accion=ping&token=${authToken}`);
      const data = await resp.json();

      if (data && (data.status === "ok" || data.autorizado)) {
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
        if (authenticated) console.log(data.mensaje || "⚠️ Tu sesión ha expirado.");
        logout();
        return false;
      }
    } catch (err) {
      console.log("auth_verify_err:", err.message);
      showToast("⚠️ Error de conexión. No se pudo verificar la sesión.", "warning", 4000, "Autenticación");
      logout();
      return false;
    }
  }, [authToken, logout, showToast, authenticated]);

  // 🚀 Iniciar sesión (Intercambio Google Token -> Token Propio)
  const login = useCallback(async (idToken, onComplete = () => {}) => {
    const handleFail = (mensaje, tipo = "danger") => {
      showToast(mensaje, tipo, 10000, "Autenticación");
      logout(); // 👈 Llama a logout para limpiar
      onComplete();
    };

    const currentBackendUrl = backendUrlRef.current;
    if (!currentBackendUrl) {
      const confirmar = await confirmarAccion({
        titulo: "Backend no configurado",
        mensaje: "No hay un backend activo para realizar la autenticación. Dirígete a la opción «Más», en la parte superior derecha, o al menú hamburguesa y selecciona «Configurar Backend».",
        textoConfirmar: "✅ Abrir Administración de Backends",
        textoCancelar: "❌ Cancelar",
        icono: "info",
      });

      if (!confirmar) {
        showToast("❌ Operación cancelada por el usuario", "warning", 4000, "Autenticación");
        onComplete(); // 🔑 libera loading
        return;
      }
      window.dispatchEvent(new CustomEvent("backend:open-config"));
      onComplete(); // 🔑 libera loading
      return;
    }

    try {
      const resp = await fetch(currentBackendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accion: "googleLogin", googleToken: idToken })
      });

      const data = await resp.json();
      if (!data || data.status !== "ok" || !data.token || !data.user) {
        handleFail(data.mensaje || "❌ Error de autenticación desde el backend");
        return;
      }

      showToast(`👋 Bienvenido ${data.user.nombre}`, "success", 3000, "Autenticación");

      setAuthToken(data.token);
      setUser(data.user);
      setAuthenticated(true);

      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        token: data.token,
        user: data.user,
        backendUrl: backendUrlRef.current,
        timestamp: Date.now(),
      }));

      onComplete();
    } catch (err) {
      console.error("Error en login (intercambio de token):", err);
      handleFail("❌ Error de conexión con el backend");
    }
  }, [showToast, logout]);

  // 🧠 Cargar token desde localStorage una sola vez al montar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.token) {
          setAuthToken(parsed.token);
          setUser(parsed.user || null);
          setAuthenticated(true); //porque se quita
        }
      } catch (err) {
        console.error("Error parseando sesión guardada:", err);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    authRef.current = authenticated;
  }, [authenticated]);

  // 🔄 2. FLUJO UNIFICADO: Verificación, Intervalos y Cambio de Backend
  useEffect(() => {
    if (!authToken || !backendUrl) return;

    // Ejecutar verificación inicial si aún no estamos authenticated

    if (!authRef.current) {
      verifyToken();
    }

    // Intervalo de revalidación contra el servidor (cada 5 min)
    const intervalPing = setInterval(verifyToken, 5 * 60 * 1000);

    // Intervalo de expiración local del JWT (cada 1 min)
    const intervalLocal = setInterval(() => {
      try {
        const payloadB64 = authToken.split('.')[0];
        const payloadStr = base64UrlDecode(payloadB64);
        const decoded = JSON.parse(payloadStr);

        if (decoded.exp * 1000 < Date.now()) {
          console.warn("⚠️ Token expirado localmente.");
          logout();
        }
      } catch (err) {
        console.error("Error verificando expiración local del token propio:", err);
        logout();
      }
    }, 60 * 1000);

    return () => {
      clearInterval(intervalPing);
      clearInterval(intervalLocal);
    };
  }, [authToken, backendUrl, verifyToken, logout]); // Se dispara si cambia el token o el backend

  // 🧭 Escuchar eventos globales emitidos por apiClient.js (auth:required)
  useEffect(() => {
    function onAuthRequired(e) {
      const msg = e?.detail?.message || "⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.";
      console.warn("🟡 Evento auth:required recibido:", msg);
      if (authenticated) logout();
    }
    window.addEventListener("auth:required", onAuthRequired);
    return () => window.removeEventListener("auth:required", onAuthRequired);
  }, [authenticated, logout]);

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
