import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Modal,
  Button,
  Form
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Bell, BoxArrowRight } from "react-bootstrap-icons";

import { useToast } from "../../context/ToastContext";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import { useProductos } from "../../context/ProductosContext.jsx";
import { useConfigAdmin } from "../../context/admin/ConfigAdminContext";
import { useBackends } from "../../context/BackendsContext.jsx";
import { useAuth } from "../../context/AuthContext";

import ReinitModal from "../ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

import "./Navbar.scss";

function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const { getDatos } = useDatosTributarios();
  const { refreshProductos } = useProductos();
  const { reinicializarSistemaForzado } = useConfigAdmin();
  const {
    backends,
    activeBackend,
    addBackend,
    deleteBackend,
    setActiveBackend
  } = useBackends();

  // ---------------- UI STATES ----------------
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showBackendModal, setShowBackendModal] = useState(false);
  const [showReinitModal, setShowReinitModal] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const [newAlias, setNewAlias] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [aliasToDelete, setAliasToDelete] = useState(null);

  // ---------------- HANDLERS ----------------
  const handleBellClick = () => {
    if (location.pathname === "/datos-tributarios") {
      getDatos();
    } else {
      navigate("/datos-tributarios");
    }
  };

  // ---------------- RENDER ----------------
  return (
    <>
      {/* ========== NAVBAR SUPERIOR ========== */}
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container fluid>
          {/* BRAND */}
          <div className="backend-circle-Brand">
            {activeBackend && (
              <div
                className="backend-circle"
                title={`Backend: ${activeBackend.alias}`}
                onClick={() => setShowBackendModal(true)}
              >
                {activeBackend.alias.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div className="grupNavTex">
              <Navbar.Brand as={Link} to="/">
                DeclaraciónApp
              </Navbar.Brand>
              {activeBackend?.alias && (
                <small className="backend-alias">
                  {activeBackend.alias}
                </small>
              )}
            </div>
          </div>

          {/* ICONOS DERECHA */}
          <div className="d-flex align-items-center">
            <Bell
              size={22}
              className="me-3 cursor-pointer"
              onClick={handleBellClick}
            />
            <Navbar.Toggle onClick={() => setShowMainMenu(true)} />
          </div>

          {/* ========== OFFCANVAS PRINCIPAL ========== */}
          <Navbar.Offcanvas
            placement="end"
            show={showMainMenu}
            onHide={() => setShowMainMenu(false)}
          >
            {/* HEADER USUARIO */}
            {/* <Offcanvas.Header closeButton className="offcanvas-header-custom">
              <div className="offcanvas-user">
                <img
                  src={user?.picture || "https://via.placeholder.com/48"}
                  alt="Usuario"
                  className="user-avatar"
                />
                <div className="user-info">
                  <div className="user-name">
                    {user?.nombre || "Usuario"}
                  </div>
                  <div className="user-email">
                    {user?.correo}
                  </div>
                </div>
              </div>
            </Offcanvas.Header> */}

<Offcanvas.Header closeButton className="offcanvas-header-user">
  {user ? (
    <div className="offcanvas-user-header-wrapper">
      <div className="offcanvas-user-header">
        <img
          src={user.picture || "https://via.placeholder.com/48"}
          alt={user.nombre || user.correo}
          className="offcanvas-user-avatar"
        />
        <div className="offcanvas-user-info">
          <div className="offcanvas-user-name">
            {user.nombre || "Usuario"}
          </div>
          <div className="offcanvas-user-email">
            {user.correo}
          </div>
        </div>
      </div>

      {/* Logout SOLO móvil */}
      <button
        className="offcanvas-logout-btn"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        <BoxArrowRight size={16} />
        <span>Cerrar sesión</span>
      </button>
    </div>
  ) : (
    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
      Menú
    </Offcanvas.Title>
  )}
</Offcanvas.Header>


            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link
                  onClick={() => {
                    setShowMainMenu(false);
                    navigate("/productos");
                  }}
                >
                  Productos
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    setShowMainMenu(false);
                    navigate("/facturas");
                  }}
                >
                  Add Facturas
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    setShowMainMenu(false);
                    navigate("/contador");
                  }}
                >
                  Contador
                </Nav.Link>

                <hr />

                {/* MAS */}
                <Nav.Link
                  className="nav-link-more"
                  onClick={() => {
                    setShowMainMenu(false);
                    setShowMoreMenu(true);
                  }}
                >
                  <span>Más</span>
                  <span className="arrow">›</span>
                </Nav.Link>

                <hr />

                {/* LOGOUT */}
                <Nav.Link
                  className="logout-link"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  <BoxArrowRight size={18} />
                  <span>Cerrar sesión</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* ========== OFFCANVAS MAS (NIVEL 2) ========== */}
      <Offcanvas
        placement="end"
        show={showMoreMenu}
        onHide={() => setShowMoreMenu(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowMoreMenu(false);
              setShowMainMenu(true);
            }}
          >
            ← Más opciones
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              onClick={() => {
                setShowMoreMenu(false);
                navigate("/admin");
              }}
            >
              Admin & Config
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                setShowMoreMenu(false);
                navigate("/about");
              }}
            >
              Donaciones
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                setShowMoreMenu(false);
                navigate("/about");
              }}
            >
              Acerca de
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* ========== MODAL BACKENDS ========== */}
      <Modal show={showBackendModal} onHide={() => setShowBackendModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Configurar Backends</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {backends.length === 0 ? (
            <p>No hay backends configurados.</p>
          ) : (
            <ul className="list-group">
              {backends.map((b) => (
                <li
                  key={b.alias}
                  className={`list-group-item d-flex justify-content-between ${
                    activeBackend?.alias === b.alias ? "active" : ""
                  }`}
                >
                  <span>{b.alias}</span>
                  <div>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => setActiveBackend(b.alias)}
                    >
                      Usar
                    </Button>{" "}
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => setAliasToDelete(b.alias)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <hr />

          <h6
            style={{ cursor: "pointer", color: "#0d6efd" }}
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? "➖ Cancelar" : "➕ Agregar nuevo Backend"}
          </h6>

          {showAddForm && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Alias</Form.Label>
                <Form.Control
                  value={newAlias}
                  onChange={(e) => setNewAlias(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>URL</Form.Label>
                <Form.Control
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                />
              </Form.Group>

              <Button
                onClick={() => {
                  addBackend(newAlias, newUrl);
                  showToast("✅ Backend agregado", "success");
                  setNewAlias("");
                  setNewUrl("");
                  setShowAddForm(false);
                }}
              >
                Guardar
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {/* ========== MODAL REINICIO ========== */}
      <ReinitModal
        show={showReinitModal}
        onHide={() => setShowReinitModal(false)}
        onConfirm={async () => {
          setLoadingOverlay(true);
          await reinicializarSistemaForzado();
          refreshProductos();
          setLoadingOverlay(false);
        }}
      />

      <LoadingOverlay show={loadingOverlay} />
    </>
  );
}

export default AppNavbar;
