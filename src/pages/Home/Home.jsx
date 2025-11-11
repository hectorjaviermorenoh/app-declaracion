import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";

export default function Home() {
  const { login, authenticated, loading } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  // 💡 Estados locales
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  /***************************************************
   * 🔄 Redirige automáticamente si hay sesión activa
   ***************************************************/
  useEffect(() => {
    if (!loading && authenticated) {
      navigate("/productos");
    }
  }, [authenticated, loading, navigate]);

  /***************************************************
   * 📦 Detectar carga del script de Google (sin polling)
   ***************************************************/
  useEffect(() => {
    // Si ya está disponible, marcamos como cargado
    if (window.google?.accounts?.id) {
      setGoogleScriptLoaded(true);
      return;
    }

    // Escuchar evento global del script (ver <script> en index.html)
    const handleGoogleLoaded = () => setGoogleScriptLoaded(true);
    window.addEventListener("google-loaded", handleGoogleLoaded);

    // Limpieza al desmontar
    return () => window.removeEventListener("google-loaded", handleGoogleLoaded);
  }, []);

  /***************************************************
   * 🚀 Inicializar el botón de Google
   ***************************************************/
  useEffect(() => {
    // Evitar ejecutar si aún no está todo listo
    if (loading || authenticated || isLoggingIn || !googleScriptLoaded) return;

    const container = document.getElementById("googleLoginDiv");
    if (!container) return;

    // Limpiar botón previo (evita duplicados)
    container.innerHTML = "";

    // Inicializa cliente Google
    window.google.accounts.id.initialize({
      client_id:
        "648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",
      callback: (response) => {
        const token = response.credential;
        setIsLoggingIn(true);

        login(token, () => {
          setIsLoggingIn(false);
          showToast("✅ Sesión iniciada correctamente", "success", 2000, "Login");
        });
      },
    });

    // Renderiza botón visual
    window.google.accounts.id.renderButton(container, {
      theme: "filled_blue",
      size: "large",
      shape: "pill",
      text: "signin_with",
      width: 240,
    });
  }, [login, loading, authenticated, isLoggingIn, googleScriptLoaded, showToast]);

  /***************************************************
   * ⏳ Render condicional según estado de sesión / carga
   ***************************************************/
  if (loading || (authenticated === false && !googleScriptLoaded)) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" />
          <p className="text-secondary">
            {loading ? "Verificando sesión..." : "Cargando componentes de Google..."}
          </p>
        </div>
      </div>
    );
  }

  // Si ya está logueado, no mostrar el login
  if (authenticated) return null;

  // Mostrar spinner mientras se procesa el inicio de sesión
  if (isLoggingIn && !authenticated) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-success mb-3" role="status" />
          <p className="text-success">Iniciando sesión, un momento...</p>
        </div>
      </div>
    );
  }

  /***************************************************
   * 🧩 Interfaz principal (login)
   ***************************************************/
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ maxWidth: 400 }}>
        <h3 className="mb-3 fw-bold">Bienvenido</h3>
        <p className="text-muted mb-4">
          Inicia sesión con tu cuenta de Google para continuar
        </p>

        {/* El botón se renderiza dinámicamente aquí */}
        <div id="googleLoginDiv"></div>
      </div>
    </div>
  );
}
