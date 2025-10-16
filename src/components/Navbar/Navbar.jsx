import React, { useState} from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import AddProductoModal from "../AddProductoModal/AddProductoModal";
import ReinitModal from "../ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import { useProductos } from "../../context/ProductosContext.jsx";
import { useBackends } from "../../context/BackendsContext.jsx";
import { Bell } from "react-bootstrap-icons";
import "./Navbar.scss";

function AppNavbar() {

  const { backends, activeBackend, addBackend, deleteBackend, setActiveBackend } = useBackends();
  const { fetchDatos } = useDatosTributarios(); // 👈 accede al refresco
  const { refreshProductos } = useProductos(); // 👈 usar el refresh del contexto

  const { showToast } = useToast();



  // ---------------- Estados de UI ----------------
  const [newAlias, setNewAlias] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [aliasToDelete, setAliasToDelete] = useState(null);


  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showReinitModal, setShowReinitModal] = useState(false);
  const [show, setShow] = useState(false);

  const [showAddForm, setShowAddForm] = useState(false);

  const [loading, setLoading] = useState(false);

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
      fetchDatos();
    } else {
      navigate("/datos-tributarios");
    }
  };

  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="shadow-sm mb-3 sticky-top">
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
              <Navbar.Brand className="app-brand" as={Link} to="/" onClick={() => { refreshProductos();}}>DeclaraciónApp</Navbar.Brand>
              {activeBackend?.alias && (
                <h6 className="backend-alias mb-0" title={activeBackend.alias}>
                  {activeBackend.alias}
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

                <Nav.Link onClick={() => { setShowAddModal(true); setShow(false); }}>Adicionar Producto</Nav.Link>
                <Nav.Link onClick={() => {setShow(false); navigate("/");}}>Productos</Nav.Link>
                <Nav.Link onClick={() => {setShow(false); navigate("/registros");}}>Contador</Nav.Link>
                <Nav.Link onClick={() => {setShow(false); navigate("/config");}}>Configuración</Nav.Link>
                <Nav.Link onClick={() => {setShow(false); navigate("/usuarios");}}>Usuarios</Nav.Link>


                <NavDropdown title="Más" id="nav-dropdown">
                  <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/archivos">Archivos</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/admin">Admin & Config</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { setShowReinitModal(true); setShow(false); }} >Reinicializar Proyecto</NavDropdown.Item>
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

      <AddProductoModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onProductoAgregado={() => {
          setShowAddModal(false);
        }}
      />

      <ReinitModal
        show={showReinitModal}
        onHide={() => setShowReinitModal(false)}
        onConfirm={async (confirmText, borrarCarpetas) => {
          if (confirmText !== "INICIALIZAR") return;

          // 👇 Cierra el modal ANTES de arrancar el loading
          setShowReinitModal(false);
          setLoading(true);

          try {
            const resp = await fetch(activeBackend?.url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                accion: "inicializarForzado",
                correoAdmin: "hectorjaviermorenoh@gmail.com",
                confirmar: confirmText,
                borrarCarpetas,
              }),
            });

            const data = await resp.json();
            console.log("⚡ Reinicialización:", data);

            if (data.status === "ok") {
              refreshProductos();
              showToast("✅ Proyecto reinicializado correctamente", "success", 3000, "Navbar");
            } else {
              showToast("❌ Error: " + (data.mensaje || "No se pudo reinicializar"), "danger", 4000, "Navbar");
            }

          } catch (err) {
            console.error("❌ Error reinicializando:", err);
            showToast(`❌ Error reinicializando: ${err}`, "danger", 4000, "Navbar");
          } finally {
            setLoading(false);
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
                      Eliminar1
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

      <LoadingOverlay show={loading} />
    </>
  );
}

export default AppNavbar;