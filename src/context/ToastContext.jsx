// src/context/ToastContext.jsx
import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // 🔹 Mostrar un nuevo toast
  const showToast = useCallback((message, variant = "success", delay = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, variant, delay }]);
  }, []);

  // 🔹 Eliminar un toast
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Contenedor global de toasts */}
      <ToastContainer
        position="top-end"
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
            <Toast.Body>{toast.message}</Toast.Body>
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
