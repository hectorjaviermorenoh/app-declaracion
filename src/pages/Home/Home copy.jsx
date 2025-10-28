import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

/**
 * Home.jsx
 * ---------------------------------------
 * Pantalla de inicio de sesión.
 * - Si el usuario ya está autenticado, redirige automáticamente a /productos.
 * - Si no, muestra el botón de Google.
 * - Usa el Client ID configurado en tu proyecto de Google Cloud.
 */
export default function Home() {
  const { login, authenticated, loading } = useAuth();
  const navigate = useNavigate();

  // 🔁 Redirige si ya hay sesión activa
  useEffect(() => {
    if (!loading && authenticated) {
      navigate("/productos");
    }
  }, [authenticated, loading, navigate]);

  // 🚀 Inicializar el botón de Google
  useEffect(() => {
    if (loading || authenticated) return; // 👈 evita inicializar el botón si ya hay sesión o aún carga
    if (typeof window.google === "undefined") return;

    window.google.accounts.id.initialize({
      client_id:
        "648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",
      callback: (response) => {
        const token = response.credential;
        login(token);
      },
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleLoginDiv"),
      {
        theme: "filled_blue",
        size: "large",
        shape: "pill",
        text: "signin_with",
        width: 240,
      }
    );

    // Opcional: mostrar automáticamente One Tap
    window.google.accounts.id.prompt();
  }, [login, loading, authenticated]);

  // ⏳ Mientras carga AuthContext, muestra spinner en lugar del botón
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

  // Si ya está autenticado, no renderizar nada (navegación automática se encarga)
  if (authenticated) return null;

  // 👇 Solo se muestra si no hay sesión y ya se verificó
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ maxWidth: 400 }}>
        <h3 className="mb-3 fw-bold">Bienvenido</h3>
        <p className="text-muted mb-4">
          Inicia sesión con tu cuenta de Google para continuar
        </p>

        <div id="googleLoginDiv"></div>
      </div>
    </div>
  );
}
