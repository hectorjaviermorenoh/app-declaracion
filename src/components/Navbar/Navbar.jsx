import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";
import AddProductoModal from "../AddProductoModal/AddProductoModal";


import { Link } from "react-router-dom";
import { useBackendUrl } from "../../hooks/useBackendUrl.js";
import { useProductos } from "../../context/ProductosContext.jsx";   // 👈 importar contexto
import "./Navbar.scss";

function AppNavbar() {
  const { backendUrl, saveBackendUrl } = useBackendUrl();
  const { refreshProductos } = useProductos(); // 👈 usar el refresh del contexto
  const [showModal, setShowModal] = useState(false);
  const [tempUrl, setTempUrl] = useState(backendUrl || "");
  const [showToast, setShowToast] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const handleSave = () => {
    if (tempUrl.trim()) {
      saveBackendUrl(tempUrl.trim());   // guarda en localStorage
      setTempUrl("");                   // limpia el input
      setShowModal(false);              // cierra modal
      setShowToast(true);               // muestra el toast ✅
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
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/">Productos</Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/config">Configuración</Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/usuarios">Usuarios</Nav.Link>
                <Nav.Link onClick={() => setShow(false)} as={Link} to="/tributarios">Datos Tributarios</Nav.Link>

                <NavDropdown title="Más" id="nav-dropdown">
                  <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/logs">Logs</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/archivos">Archivos</NavDropdown.Item>
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
          refreshProductos();   // ✅ ahora refresca el listado global
          setShowAddModal(false); // cerramos el modal
        }}
      />


      {/* Toast de confirmación */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          show={showToast}
          autohide
          delay={3000}
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <strong className="me-auto">Configuración</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            ✅ URL del backend guardada correctamente.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default AppNavbar;