import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useBackends } from "../../context/BackendsContext";
import TutorialModal from "../../components/Modals/TutorialModal/TutorialModal";
import "./Home.scss";


export default function Home() {

  const { login, authenticated, loading } = useAuth();
  const { activeBackend } = useBackends();
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [backendPrompted, setBackendPrompted] = useState(false);
  const [abrirVideoDemo, setAbrirVideoDemo] = useState(false);

  /***************************************************
   * 🔄 Si ya está autenticado → ir a productos
   ***************************************************/

  useEffect(() => {
    if (loading) return;

    if (authenticated && !activeBackend && !backendPrompted) {
      setBackendPrompted(true);
      window.dispatchEvent(new CustomEvent("backend:open-config"));
      return;
    }

    if (authenticated && activeBackend) {
      navigate("/productos", { replace: true });
    }
  }, [authenticated, loading, activeBackend, backendPrompted, navigate]);

  /***************************************************
   * 🚀 Renderizar botón de Google con reintentos
   ***************************************************/
  useEffect(() => {
    if (loading || authenticated || isLoggingIn) return;

    const container = document.getElementById("googleLoginDiv");
    if (!container) return;

    const waitForGoogle = setInterval(() => {
      if (!window.google?.accounts?.id) return;

      clearInterval(waitForGoogle);

      // 🔐 Inicializar SOLO una vez en toda la app
      if (!window.googleInitialized) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

          callback: (response) => {

            if (isLoggingIn) return;

            const token = response.credential;

            const start = Date.now();
            setIsLoggingIn(true);

            login(token, () => {

              const elapsed = Date.now() - start;

              setTimeout(() => {
                setIsLoggingIn(false);
              }, Math.max(0, 500 - elapsed));

            });
          }

        });

        window.googleInitialized = true;
      }

      container.innerHTML = "";

      window.google.accounts.id.renderButton(container, {
        theme: "filled_blue",
        size: "large",
        shape: "pill",
        text: "signin_with",
        width: 240,
      });

    }, 300);

    return () => clearInterval(waitForGoogle);

  }, [login, loading, authenticated, isLoggingIn]);

  /***************************************************
   * 🧭 Pantallas condicionales
   ***************************************************/
  if (loading) {
    return (
      <div className="home-wrapper">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" />
          <p className="text-secondary">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  if (authenticated) return null;

  if (isLoggingIn && !authenticated) {
    return (
      <div className="home-wrapper">
        <div className="text-center">
          <div className="spinner-border text-success mb-3" role="status" />
          <p className="text-success">Iniciando sesión, un momento...</p>
        </div>
      </div>
    );
  }

  /***************************************************
   * 🎨 UI principal (login)
   ***************************************************/
  return (
    <div className="home-wrapper d-flex flex-column align-items-center">
      {/* Tarjeta de Login Principal */}
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: 400, borderRadius: '20px' }}>
        <h3 className="mb-3 fw-bold">Bienvenido</h3>
        <p className="text-muted mb-4">
          Inicia sesión con tu cuenta de Google para gestionar tus documentos.
        </p>

        <div id="googleLoginDiv" className="d-flex justify-content-center mb-3"></div>

        {/* BOTÓN DE AYUDA / TUTORIAL */}

        <div className={`bg-light p-3 rounded-3 mt-2 ${!activeBackend ? "backend-attention" : ""}`}>
          <p className="small text-secondary mb-2">¿Quieres ver cómo funciona?</p>
          <div className="d-flex flex-column gap-2">
            {/* Botón para el Video de Uso (Vimeo) */}
            <button
              onClick={() => setAbrirVideoDemo(true)}
              className="btn btn-sm btn-link text-decoration-none fw-bold"
            >
              <i className="bi bi-play-circle-fill me-1"></i> Ver Demo de la App
            </button>

            <Link to="/backend-setup" className="text-primary fw-bold text-decoration-none small">
              Guía: Configurar mi Backend →
            </Link>
          </div>
        </div>

        <hr className="mt-4 mb-3" />
        <div className="legal-links" style={{ fontSize: "0.85rem" }}>
          <Link to="/privacidad" className="text-decoration-none text-secondary mx-2">Privacidad</Link>
          <span className="text-muted">|</span>
          <Link to="/terminos" className="text-decoration-none text-secondary mx-2">Términos</Link>
        </div>
      </div>

      {/* SECCIÓN OPCIONAL DEBAJO DE LA TARJETA */}
      <div className="mt-4 text-center text-white-50">
        <small>AppDeclaración: Gestión descentralizada de documentos tributarios.</small>
      </div>

      <TutorialModal
        isOpen={abrirVideoDemo}
        onClose={() => setAbrirVideoDemo(false)}
      />

    </div>
  );

}
