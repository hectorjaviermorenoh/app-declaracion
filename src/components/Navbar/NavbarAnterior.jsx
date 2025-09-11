import React, { useState} from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";

import AddProductoModal from "../AddProductoModal/AddProductoModal";
import ReinitModal from "../ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";


import { useProductos } from "../../context/ProductosContext.jsx";   // 👈 importar contexto
import { useBackends } from "../../context/BackendsContext.jsx";

import "./Navbar.scss";

function AppNavbar() {
  const {
    backends, activeBackend, addBackend, deleteBackend, setActiveBackend
  } = useBackends();

  const { refreshProductos } = useProductos(); // 👈 usar el refresh del contexto

  // ---------------- Estados de UI ----------------
  const [newAlias, setNewAlias] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [aliasToDelete, setAliasToDelete] = useState(null);


  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showReinitModal, setShowReinitModal] = useState(false);
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);


  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [toastTitle, setToastTitle] = useState("Notificación");


  const handleClose = () => setShow(false);

    // ---------------- Funciones ----------------
  const handleSetActive = (alias) => {
    setActiveBackend(alias);   // 👈 ya lo hace el contexto
    setToastVariant("success");
    setToastTitle("Backends");
    setToastMsg(`✅ Ahora estás usando "${alias}"`);
    setShowToast(true);
    refreshProductos();
  };

  const handleAddBackend = () => {
    if (!newAlias.trim() || !newUrl.trim()) {
      setToastVariant("danger");
      setToastTitle("Backends");
      setToastMsg("⚠️ Alias y URL son obligatorios");
      setShowToast(true);
      return;
    }
    addBackend(newAlias, newUrl);
    setToastVariant("success");
    setToastTitle("Backends");
    setToastMsg(`✅ Backend "${newAlias}" agregado`);
    setShowToast(true);
    setNewAlias("");
    setNewUrl("");
  };

  const handleDeleteBackend = (alias) => {
    deleteBackend(alias);
    setAliasToDelete(null);
    setToastVariant("success");
    setToastTitle("Backends");
    setToastMsg(`✅ Backend "${alias}" eliminado`);
    setShowToast(true);
  };



  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="shadow-sm mb-3">
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
            <Navbar.Brand as={Link} to="/">DeclaraciónApp</Navbar.Brand>
          </div>

          <Navbar.Toggle onClick={() => setShow(true)} aria-controls="offcanvasNavbar-expand-lg" />
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
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/">Productos</Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/config">Configuración</Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/usuarios">Usuarios</Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/tributarios">Datos Tributarios</Nav.Link>

                <NavDropdown title="Más" id="nav-dropdown">
                  <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/logs">Logs</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/archivos">Archivos</NavDropdown.Item>
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
                    <Button size="sm" variant="success" onClick={() => handleSetActive(b.alias)}>
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
          <h6>➕ Agregar nuevo Backend</h6>
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
            <Button variant="primary" onClick={handleAddBackend}>
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

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
              setToastVariant("success");
              setToastTitle("Reinicialización");
              setToastMsg("✅ Proyecto reinicializado correctamente");
            } else {
              setToastVariant("danger");
              setToastTitle("Reinicialización");
              setToastMsg("❌ Error: " + (data.mensaje || "No se pudo reinicializar"));
            }
            setShowToast(true);

          } catch (err) {
            console.error("❌ Error reinicializando:", err);
            setToastVariant("danger");
            setToastTitle("Reinicialización");
            setToastMsg("⚠️ Error de conexión con backend");
            setShowToast(true);
          } finally {
            setLoading(false);
          }
        }}
      />

    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Configurar Backends line 351</Modal.Title>
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
      <h6>➕ Agregar nuevo Backend</h6>
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
        <Button variant="primary" onClick={() => addBackend(newAlias, newUrl)}>
          Guardar
        </Button>
      </Form>




      </Modal.Body>
    </Modal>





      {/* Toast de confirmación */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg={toastVariant}
          show={showToast}
          autohide
          delay={3000}
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <strong className="me-auto">{toastTitle}</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>

      <LoadingOverlay show={loading} />
    </>
  );
}

export default AppNavbar;