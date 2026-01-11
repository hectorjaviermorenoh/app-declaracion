import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BackendsProvider } from "./context/BackendsContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductosProvider } from "./context/ProductosContext";
import { FacturasProvider } from "./context/FacturasContext";
import { DatosTributariosProvider } from "./context/DatosTributariosContext";
import { AdminProvider } from "./context/admin/AdminProvider";
import { ToastProvider } from "./context/ToastContext";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/base.scss";
import "./assets/Font_AppDeclaracion/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ToastProvider>
        <BackendsProvider>
          <AuthProvider>
            <FacturasProvider>
              <ProductosProvider>
                  <DatosTributariosProvider>
                    <AdminProvider>
                      <App />
                    </AdminProvider>
                  </DatosTributariosProvider>
              </ProductosProvider>
            </FacturasProvider>
          </AuthProvider>
        </BackendsProvider>
      </ToastProvider>
    </HashRouter>
  </React.StrictMode>
);


/* 👇 REGISTRO DEL SERVICE WORKER (PWA) */
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/app-declaracion/service-worker.js")
      .then(() => console.log("✅ Service Worker registrado"))
      .catch((err) => console.error("❌ Error SW:", err));
  });

  let refreshing = false;

  /* 🔄 Cuando hay un SW nuevo, recargar la app automáticamente */
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    console.log("🔄 Nueva versión detectada, recargando app...");
    window.location.reload();
  });
}


