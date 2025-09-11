import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProductos } from "../../context/ProductosContext.jsx";
import { useDatosTributarios } from "../../context/DatosTributariosContext.jsx";
import ReinitModal from "../ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import AddProductoModal from "../AddProductoModal/AddProductoModal";
import "./Navbar.scss";

function AppNavbar() {
  const { refreshProductos } = useProductos();
  const {
    datos,
    addDato,
    updateDato,
    deleteDato,
  } = useDatosTributarios();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showReinitModal, setShowReinitModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔔 Offcanvas Datos Tributarios
  const [showDatos, setShowDatos] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [temp, setTemp] = useState({});
  const [newRow, setNewRow] = useState(false);

  const handleEdit = (d) => {
    setEditingId(d.id);
    setTemp({ ...d });
  };

  const handleSave = async (id) => {
    await updateDato(id, temp);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setTemp({});
    setNewRow(false);
  };

  const handleAdd = () => {
    const fakeId = "temp_" + Date.now();
    setEditingId(fakeId);
    setTemp({ label: "", valor: "" });
    setNewRow(true);
  };

  const handleSaveNew = async () => {
    await addDato(temp);
    setNewRow(false);
    setEditingId(null);
    setTemp({});
  };

  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="shadow-sm mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">DeclaraciónApp</Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={() => setShowAddModal(true)}>Adicionar Producto</Nav.Link>
                <Nav.Link as={Link} to="/">Productos</Nav.Link>
                <Nav.Link as={Link} to="/config">Configuración</Nav.Link>
                <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>

                <Nav.Link onClick={() => setShowDatos(true)}>🔔 Datos Tributarios</Nav.Link>

                <Nav.Link onClick={() => setShowReinitModal(true)}>
                  Reinicializar Proyecto
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Modal de Productos */}
      <AddProductoModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onProductoAgregado={() => refreshProductos()}
      />

      {/* Modal de Reinicialización */}
      <ReinitModal
        show={showReinitModal}
        onHide={() => setShowReinitModal(false)}
        onConfirm={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      />

      {/* Offcanvas de Datos Tributarios */}
      <Offcanvas show={showDatos} onHide={() => setShowDatos(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>📑 Datos Tributarios</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant="primary" size="sm" className="mb-3" onClick={handleAdd}>
            ➕ Nuevo
          </Button>

          <div className="datos-tributarios-list">
            {datos.map((d) => (
              <div key={d.id} className="dato-item">
                {editingId === d.id ? (
                  <>
                    <textarea
                      value={temp.label}
                      onChange={(e) => setTemp({ ...temp, label: e.target.value })}
                    />
                    <textarea
                      value={temp.valor}
                      onChange={(e) => setTemp({ ...temp, valor: e.target.value })}
                    />
                    <div className="actions">
                      <Button size="sm" variant="success" onClick={() => handleSave(d.id)}>💾</Button>{" "}
                      <Button size="sm" variant="secondary" onClick={handleCancel}>✖️</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dato-label">{d.label}</div>
                    <div className="dato-valor">{d.valor}</div>
                    <div className="actions">
                      <Button size="sm" variant="warning" onClick={() => handleEdit(d)}>✏️</Button>{" "}
                      <Button size="sm" variant="danger" onClick={() => deleteDato(d.id)}>❌</Button>
                    </div>
                  </>
                )}
              </div>
            ))}

            {newRow && editingId?.startsWith("temp_") && (
              <div className="dato-item">
                <textarea
                  placeholder="Label"
                  value={temp.label}
                  onChange={(e) => setTemp({ ...temp, label: e.target.value })}
                />
                <textarea
                  placeholder="Valor"
                  value={temp.valor}
                  onChange={(e) => setTemp({ ...temp, valor: e.target.value })}
                />
                <div className="actions">
                  <Button size="sm" variant="success" onClick={handleSaveNew}>💾</Button>{" "}
                  <Button size="sm" variant="secondary" onClick={handleCancel}>✖️</Button>
                </div>
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <LoadingOverlay show={loading} />
    </>
  );
}

export default AppNavbar;
