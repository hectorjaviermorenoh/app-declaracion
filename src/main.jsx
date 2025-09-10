import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BackendsProvider } from "./context/BackendsContext";
import { ProductosProvider } from "./context/ProductosContext";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/base.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackendsProvider>
      <HashRouter>
        <ProductosProvider>
          <App />
        </ProductosProvider>
      </HashRouter>
    </BackendsProvider>
  </React.StrictMode>
);
