// src/hooks/useAuth.js
import { useEffect, useState, useCallback } from "react";

/**
 * Simple jwt decode (sin librería): solo para leer el payload (base64url)
 */
function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export function useAuth({ clientId, workerUrl }) {
  const [idToken, setIdToken] = useState(null);
  const [user, setUser] = useState(null); // {email, name, picture...}
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.google || !clientId) return;

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => {
        // response.credential = id_token (JWT)
        if (response?.credential) {
          const payload = parseJwt(response.credential);
          setIdToken(response.credential);
          setUser({
            email: payload?.email,
            name: payload?.name,
            picture: payload?.picture,
            locale: payload?.locale,
            sub: payload?.sub
          });
        }
      },
      auto_select: false
    });

    setReady(true);
  }, [clientId]);

  const renderButton = (containerId = "g_id_signin") => {
    if (!window.google || !ready) return;
    // Opciones del botón, puedes ajustarlas
    window.google.accounts.id.renderButton(
      document.getElementById(containerId),
      { theme: "outline", size: "large" }
    );
  };

  const prompt = () => {
    if (!window.google) return;
    window.google.accounts.id.prompt();
  };

  const signOut = () => {
    // Google Identity no expulsa al usuario del navegador automáticamente.
    // Limpiamos localmente.
    setIdToken(null);
    setUser(null);
  };

  const sendTokenToWorker = useCallback(
    async (accion = "getUsuarioActual", extra = {}) => {
      if (!idToken) throw new Error("No idToken available");
      // Enviamos token al worker para su validación y reenvío al backend.
      const resp = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          accion,
          id_token: idToken,
          extra
        })
      });
      return resp.json();
    },
    [idToken, workerUrl]
  );

  return {
    user,
    idToken,
    ready,
    renderButton,
    prompt,
    signOut,
    sendTokenToWorker
  };
}
