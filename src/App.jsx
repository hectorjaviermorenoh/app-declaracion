import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import AppNavbar from "./components/Navbar/Navbar";
import BackendConfigModal from "./components/Modals/BackendConfigModal/BackendConfigModal";

import InstallPWA from "./components/InstallPWA/InstallPWA";
import InstallIOS from "./components/InstallPWA/InstallIOS";

import Home from "./pages/Home/Home";
import Productos from "./pages/Productos/Productos";
import DatosTributarios from "./pages/DatosTributarios/DatosTributarios";
import Contador from "./pages/Contador/Contador";
import Facturas from "./pages/Facturas/Facturas";
import { DashboardAdmin } from "./pages/DashboardAdmin/DashboardAdmin";

function App() {
  const [showBackendModal, setShowBackendModal] = useState(false);

  /* 🔔 Escuchar evento global */
  useEffect(() => {
    const openModal = () => setShowBackendModal(true);
    window.addEventListener("backend:open-config", openModal);

    return () => {
      window.removeEventListener("backend:open-config", openModal);
    };
  }, []);

  return (
    <>
      {/* 🔹 Navbar solo dispara acciones */}
      <AppNavbar onOpenBackend={() => setShowBackendModal(true)} />

      {/* 🔹 Modal GLOBAL */}
      <BackendConfigModal
        show={showBackendModal}
        onHide={() => setShowBackendModal(false)}
      />

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/datos-tributarios" element={<DatosTributarios />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/facturas" element={<Facturas />} />
          <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      </Container>

      <InstallPWA />
      <InstallIOS />
    </>
  );
}

export default App;
