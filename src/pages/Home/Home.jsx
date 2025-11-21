import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const { login, authenticated, loading } = useAuth();
  const navigate = useNavigate();


  const [isLoggingIn, setIsLoggingIn] = useState(false);

  /***************************************************
   * 🔄 Si ya está autenticado → ir a productos
   ***************************************************/
  useEffect(() => {
    if (!loading && authenticated) {
      navigate("/productos");
    }
  }, [authenticated, loading, navigate]);

  /***************************************************
   * 🚀 Renderizar botón de Google con reintentos
   ***************************************************/
  useEffect(() => {
    if (loading || authenticated || isLoggingIn) return;

    const renderGoogleButton = () => {
      const container = document.getElementById("googleLoginDiv");
      if (!container) return;

      if (!window.google?.accounts?.id) return;

      container.innerHTML = "";

      window.google.accounts.id.initialize({
        client_id:
          "648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",
        callback: (response) => {
          const token = response.credential;
          setIsLoggingIn(true);

          login(token, () => {
            setIsLoggingIn(false);
          });
        },
      });

      window.google.accounts.id.renderButton(container, {
        theme: "filled_blue",
        size: "large",
        shape: "pill",
        text: "signin_with",
        width: 240,
      });
    };

    // Primer intento inmediato
    renderGoogleButton();

    // Reintentos cada 500 ms hasta 10 veces
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (window.google?.accounts?.id) {
        renderGoogleButton();
        clearInterval(interval);
      }
      if (attempts > 10) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [login, loading, authenticated, isLoggingIn]);

  /***************************************************
   * 🧭 Pantallas condicionales
   ***************************************************/
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
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
      <div className="d-flex justify-content-center align-items-center vh-100">
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
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ maxWidth: 400 }}>
        <h3 className="mb-3 fw-bold">Bienvenido</h3>
        <p className="text-muted mb-4">
          Inicia sesión con tu cuenta de Google para continuar
        </p>

        {/* Contenedor del botón */}
        <div id="googleLoginDiv"></div>
      </div>
    </div>
  );
}
