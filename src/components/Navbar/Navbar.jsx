import React, { useState} from "react";
import { Navbar, Nav, Container, NavDropdown, Dropdown, Offcanvas, Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
// import AddProductoModal from "../Modals/AddProductoModal/AddProductoModal";
import ReinitModal from "../ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import { useProductos } from "../../context/ProductosContext.jsx";
import { useConfigAdmin } from "../../context/admin/ConfigAdminContext";
import { useBackends } from "../../context/BackendsContext.jsx";
import { useAuth } from "../../context/AuthContext";
import { Bell, BoxArrowRight  } from "react-bootstrap-icons";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.scss";

function AppNavbar() {

  const { backends, activeBackend, addBackend, deleteBackend, setActiveBackend } = useBackends();
  const { getDatos } = useDatosTributarios(); // 👈 accede al refresco
  const { refreshProductos } = useProductos(); // 👈 usar el refresh del contexto
  const { reinicializarSistemaForzado } = useConfigAdmin(); // 👈 usar el refresh del contexto

  const { showToast } = useToast();



  // ---------------- Estados de UI ----------------
  const [newAlias, setNewAlias] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [aliasToDelete, setAliasToDelete] = useState(null);

  const { user, logout } = useAuth();

  const [showModal, setShowModal] = useState(false);
  // const [showAddModal, setShowAddModal] = useState(false);
  const [showReinitModal, setShowReinitModal] = useState(false);
  const [show, setShow] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);


    // ---------------- Funciones ----------------
  const handleDeleteBackend = (alias) => {
    deleteBackend(alias);
    setAliasToDelete(null);
    showToast(`✅ Backend "${alias}" eliminado`, "success", 3000, "Navbar");
  };

  const handleToggle = () => {
    if (location.pathname === "/datos-tributarios") {
      // Refrescar datos directamente
      getDatos();
    } else {
      navigate("/datos-tributarios");
    }
  };

  return (
    <>
      <div className="navbar-return-container">
        <Navbar key="lg" bg="light" expand="lg" className="shadow-sm mb-3 sticky-top navbar-nav-principal">
          <Container fluid>
            <div className="backend-circle-Brand">
              {activeBackend && (
                <div
                  className="backend-circle ms-2"
                  title={`Backend: ${activeBackend.alias}`}
                  onClick={() => setShowModal(true)} // abre modal de gestión
                >
                  {activeBackend.alias.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div className="grupNavTex text-center">
                <Navbar.Brand className="app-brand" as={Link} to="/">DeclaraciónApp</Navbar.Brand>
                {activeBackend?.alias && (
                  <h6 className="backend-alias mb-0" title={activeBackend.alias}>

                    {activeBackend.alias}
                    {/* {user.nombre || user.correo} */}
                  </h6>
                )}
              </div>
            </div>
            <div className="contCamp">
              <div className="d-flex align-items-center">
                <Bell size={22} className="me-3 cursor-pointer" onClick={handleToggle}/>
              </div>
              <Navbar.Toggle className="hjm" onClick={() => setShow(true)} aria-controls="offcanvasNavbar-expand-lg" />
            </div>
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Menú</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                >
                  {/* <Nav.Link onClick={() => { setShowAddModal(true); setShow(false); }}>Add Producto</Nav.Link> */}
                  <Nav.Link onClick={() => {setShow(false); navigate("/productos");}}>Productos</Nav.Link>
                  <Nav.Link onClick={() => {setShow(false); navigate("/facturas");}}>Add Facturas</Nav.Link>
                  <Nav.Link onClick={() => {setShow(false); navigate("/contador");}}>Contador</Nav.Link>

                  <NavDropdown title="Más" id="nav-dropdown">
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/admin">Admin & Config</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/about">Donaciones</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/about">Acerca de</NavDropdown.Item>
                  </NavDropdown>

                  {/* Botón de 3 puntos verticales */}
                  <Nav.Link
                    onClick={() => setShowModal(true)}
                    title="Configurar Backend"
                    aria-label="Configurar Backend"
                  >
                    ⋮
                  </Nav.Link>

                  {user && (
                    <div className="d-flex align-items-center ms-3">
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="div"
                          id="userDropdown"
                          className="cursor-pointer"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={user.picture || "https://via.placeholder.com/32"}
                            alt={user.nombre || user.correo || "Usuario"}
                            width={34}
                            height={34}
                            className="rounded-circle border border-light shadow-sm"
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          className="p-3 shadow-sm text-center"
                          style={{ minWidth: "220px" }}
                        >
                          <img
                            src={user.picture || "https://via.placeholder.com/64"}
                            alt={user.nombre || "Usuario"}
                            className="rounded-circle mb-2"
                            width={64}
                            height={64}
                          />
                          <div className="fw-bold">{user.nombre || "Usuario desconocido"}</div>
                          <div className="text-muted small mb-2">{user.correo}</div>
                          <Dropdown.Divider />
                          <Dropdown.Item
                            onClick={() => {
                              logout();
                              navigate("/");
                            }}
                            className="text-danger text-center fw-semibold d-flex align-items-center justify-content-center gap-1"
                          >
                            <BoxArrowRight size={16} /> Cerrar sesión
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>



          </Container>
        </Navbar>

        {/* Modal confirmación eliminación */}
        <Modal show={!!aliasToDelete} onHide={() => setAliasToDelete(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Eliminar Backend</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Seguro que deseas eliminar la configuración <strong>{aliasToDelete}</strong>?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setAliasToDelete(null)}>Cancelar</Button>
            <Button variant="danger" onClick={() => handleDeleteBackend(aliasToDelete)}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <AddProductoModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onProductoAgregado={() => {
            setShowAddModal(false);
          }}
        /> */}

        <ReinitModal
          show={showReinitModal}
          onHide={() => setShowReinitModal(false)}
          onConfirm={async (confirmText, borrarCarpetas) => {
            if (confirmText !== "INICIALIZAR") return;
            setShowReinitModal(false);
            setLoadingOverlay(true);
            try {
              const resp = await reinicializarSistemaForzado(confirmText, borrarCarpetas);
              showToast(resp.mensaje, resp.ok ? "success" : "danger", 3000, "Navbar");
              refreshProductos();
            } finally {
              setLoadingOverlay(false);
            }
          }}


        />

        {/* Modal gestión de Backends */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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
                    className={`list-group-item d-flex justify-content-between align-items-center ${activeBackend?.alias === b.alias ? "active" : ""}`}
                  >
                    <span>{b.alias}</span>
                    <div>
                      <Button size="sm" variant="success" onClick={() => setActiveBackend(b.alias)}>
                        Usar
                      </Button>{" "}
                      <Button size="sm" variant="danger" onClick={() => setAliasToDelete(b.alias)}>
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
              onClick={() => setShowAddForm((prev) => !prev)}
            >
              {showAddForm ? "➖ Cancelar" : "➕ Agregar nuevo Backend"}
            </h6>

            {showAddForm && (
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label>Alias</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Cliente1"
                    value={newAlias}
                    onChange={(e) => setNewAlias(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="http://localhost:8080"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => {

                    try {
                      addBackend(newAlias, newUrl);
                      showToast(`✅ Backend "${newAlias}" agregado`, "success", 3000, "Navbar");
                      setNewAlias("");
                      setNewUrl("");
                      setShowAddForm(false); // ocultar form después de guardar
                    } catch (err) {
                      showToast(`❌ ${err.message}`, "success", 3000, "Navbar");
                    }

                  }}
                >
                  Guardar
                </Button>
              </Form>
            )}




          </Modal.Body>
        </Modal>

        <LoadingOverlay show={loadingOverlay} />

      </div>
    </>
  );
}

export default AppNavbar;