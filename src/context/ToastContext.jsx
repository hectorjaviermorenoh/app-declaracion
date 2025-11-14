import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // 🔹 Mostrar un nuevo toast
  const showToast = useCallback(
    (message, variant = "success", delay = 3000, header = "Notificación") => {
      // const id = Date.now();
      const id = crypto.randomUUID()

      setToasts((prev) => [
        ...prev,
        { id, message, variant, delay, header }
      ]);
    },
    []
  );

  // 🔹 Eliminar un toast
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // 🔹 Estilos por variante
  const getHeaderStyle = (variant) => {
    switch (variant) {
      case "success":
        return { color: "#0f5132" }; // verde oscuro
      case "danger":
        return { color: "#842029" }; // rojo oscuro
      case "warning":
        return { color: "#664d03" }; // amarillo oscuro
      case "info":
        return { color: "#055160" }; // azul oscuro
      default:
        return { color: "#212529" }; // gris oscuro
    }
  };

  const getBodyClass = (variant) => {
    switch (variant) {
      case "success":
      case "danger":
      case "warning":
      case "info":
        return "text-white";
      default:
        return "text-dark";
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Contenedor global de toasts */}
      <ToastContainer
        position="bottom-end" // 👈 se muestran abajo a la derecha
        className="p-3"
        style={{ zIndex: 2000 }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            bg={toast.variant}
            autohide
            delay={toast.delay}
            onClose={() => removeToast(toast.id)}
          >
            {/* 🔹 Header con color según variant */}
            <Toast.Header closeButton={true}>
              <strong
                className="me-auto"
                style={getHeaderStyle(toast.variant)}
              >
                {toast.header}
              </strong>
            </Toast.Header>

            {/* 🔹 Cuerpo con texto en blanco o negro según variant */}
            <Toast.Body className={getBodyClass(toast.variant)}>
              {toast.message}
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

// 🔹 Hook para usar el contexto
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast debe usarse dentro de <ToastProvider>");
  }
  return ctx;
}
