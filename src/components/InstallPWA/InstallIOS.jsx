import { useEffect, useState } from "react";

export default function InstallIOS() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );

    const isStandalone =
      window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches;

    if (isIOS && isSafari && !isStandalone) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h4>📲 Instalar App</h4>
        <p>
          Para agregar esta app a tu iPhone:
          <br />
          <strong>1.</strong> Toca <b>Compartir</b> ⬆️
          <br />
          <strong>2.</strong> Selecciona <b>Agregar a pantalla de inicio</b>
        </p>
        <button onClick={() => setVisible(false)} style={styles.button}>
          Entendido
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "320px",
    textAlign: "center"
  },
  button: {
    marginTop: "15px",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    cursor: "pointer"
  }
};
