import React, { useEffect, useState} from "react";
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

  // 💡 Nuevo estado para rastrear el inicio del proceso de login
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // 🔁 Redirige si ya hay sesión activa
  useEffect(() => {
    if (!loading && authenticated) {
      // navigate("/productos");
      navigate("/admin");
    }
  }, [authenticated, loading, navigate]);

  // 🚀 Inicializar el botón de Google
  useEffect(() => {
    if (loading || authenticated || isLoggingIn) return; // 👈 evita inicializar el botón si ya hay sesión o aún carga
    if (typeof window.google === "undefined") return;

    window.google.accounts.id.initialize({
      client_id:
        "648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",
      callback: (response) => {
        const token = response.credential;
        setIsLoggingIn(true); // 👈 Activa el spinner

        // 💡 Pasar una función de limpieza que se ejecutará al terminar el login
        login(token, () => {
          setIsLoggingIn(false); // 👈 Desactiva el spinner SIEMPRE que login() finalice
        });
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


  // ⏳ Mientras carga AuthContext (verificación inicial), muestra spinner
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

  // 🔒 Muestra un spinner si el token ya fue recibido y el login está en curso
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

  // Si ya está autenticado, no renderizar nada (navegación automática se encarga)
  if (authenticated) return null;

  // 👇 Solo se muestra si no hay sesión, ya se verificó y no está en proceso de login
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

