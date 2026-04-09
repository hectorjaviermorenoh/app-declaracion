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
import Privacidad from './pages/Legal/Privacidad';
import Terminos from './pages/Legal/Terminos';
import AcercaDe from "./pages/AcercaDe/AcercaDe";
import Donaciones from "./pages/Donaciones/Donaciones";
import BackendSetup from "./pages/BackendSetup/BackendSetup";
import { DashboardAdmin } from "./pages/DashboardAdmin/DashboardAdmin";
import RequireAuth from "./routes/RequireAuth";

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
          <Route
            path="/productos"
            element={
              <RequireAuth>
                <Productos />
              </RequireAuth>
            }
          />
          <Route
            path="/datos-tributarios"
            element={
              <RequireAuth>
                <DatosTributarios />
              </RequireAuth>
            }
          />
          <Route
            path="/contador"
            element={
              <RequireAuth>
                <Contador />
              </RequireAuth>
            }
          />
          <Route
            path="/facturas"
            element={
              <RequireAuth>
                <Facturas />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <DashboardAdmin />
              </RequireAuth>
            }
          />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/backend-setup" element={<BackendSetup />} />
        </Routes>
      </Container>

      <InstallPWA />
      <InstallIOS />
    </>
  );
}

export default App;
