import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";
import AddProductoModal from "../AddProductoModal/AddProductoModal";


import { Link } from "react-router-dom";
import { useBackendUrl } from "../../hooks/useBackendUrl.js";
import { useProductos } from "../../context/ProductosContext.jsx";   // 👈 importar contexto
import ReinitModal from "../ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import "./Navbar.scss";

function AppNavbar() {
  const { backendUrl, saveBackendUrl } = useBackendUrl();
  const { refreshProductos } = useProductos(); // 👈 usar el refresh del contexto
  const [showModal, setShowModal] = useState(false);
  const [tempUrl, setTempUrl] = useState(backendUrl || "");


  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [toastTitle, setToastTitle] = useState("Notificación");


  const [loading, setLoading] = useState(false);


  const [showAddModal, setShowAddModal] = useState(false);

  const [showReinitModal, setShowReinitModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const handleSave = () => {
    if (tempUrl.trim()) {
      saveBackendUrl(tempUrl.trim());   // guarda en localStorage
      setTempUrl("");                   // limpia el input
      setShowModal(false);              // cierra modal

      setToastVariant("success");
      setToastTitle("Configuración");
      setToastMsg("✅ URL del backend guardada correctamente.");
      setShowToast(true);

    }
  };



  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="shadow-sm mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">DeclaraciónApp</Navbar.Brand>
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
              {/* 🔥 Con onSelect, ya no repetimos setShow(false) en cada Nav.Link */}
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
              >
                {/* <Nav.Link onClick={() => setShow(false)} as={Link} to="/productos/add">Adicionar Producto</Nav.Link> */}
                <Nav.Link onClick={() => { setShowAddModal(true); setShow(false); }}>
                  Adicionar Producto
                </Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/">Productos1</Nav.Link>
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

      {/* Modal para configurar la URL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Configurar Backend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="backendUrl">
              <Form.Label>URL del Backend</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://localhost:8080"
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleSave}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      <AddProductoModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onProductoAgregado={() => {
          refreshProductos();   // ✅ refresca el contexto
          setShowAddModal(false); // cierra modal
          setToastVariant("success");
          setToastMsg("✅ Producto agregado correctamente");
         setShowToast(true);
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
            const resp = await fetch(backendUrl, {
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