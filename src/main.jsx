import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BackendsProvider } from "./context/BackendsContext";
import { ProductosProvider } from "./context/ProductosContext";
import { DatosTributariosProvider } from "./context/DatosTributariosContext";
import { AdminProvider } from "./context/admin/AdminProvider";
import { ToastProvider } from "./context/ToastContext";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/base.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ToastProvider>
        <BackendsProvider>
          <HashRouter>
            <ProductosProvider>
              <DatosTributariosProvider>
                <AdminProvider>
                  <App />
                </AdminProvider>
              </DatosTributariosProvider>
            </ProductosProvider>
          </HashRouter>
        </BackendsProvider>
      </ToastProvider>
    </React.StrictMode>
);
