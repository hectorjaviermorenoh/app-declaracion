import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // MUY IMPORTANTE
      setDeferredPrompt(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const instalar = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("✅ Usuario aceptó instalar");
    } else {
      console.log("❌ Usuario canceló instalación");
    }

    setDeferredPrompt(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={instalar}>
        📲 Agregar a pantalla de inicio
      </button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999
  },
  button: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  }
};
