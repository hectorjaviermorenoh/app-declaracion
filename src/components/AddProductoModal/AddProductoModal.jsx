import React, { useState } from "react";
import { Modal, Form, Button, Toast, ToastContainer, Spinner } from "react-bootstrap";
import { useBackendUrl } from "../../hooks/useBackendUrl.js";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay.jsx";
import "./AddProductoModal.scss";

function AddProductoModal({ show, onHide, onProductoAgregado }) {
  const { backendUrl } = useBackendUrl();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [entidad, setEntidad] = useState("");
  const [tipo, setTipo] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!backendUrl) {
      setToastVariant("danger");
      setToastMsg("⚠️ No hay URL configurada para el backend.");
      setShowToast(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/producto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accion: "addProducto",
          nombre,
          descripcion,
          entidad,
          tipo,
        }),
      });

      if (!response.ok) throw new Error("Error al guardar producto");

      const data = await response.json();

      setToastVariant("success");
      setToastMsg("✅ Producto agregado con éxito");
      setShowToast(true);

      // notificar al padre que hay un producto nuevo
      if (onProductoAgregado) onProductoAgregado(data);

      // limpiar
      setNombre("");
      setDescripcion("");
      setEntidad("");
      setTipo("");

      // cerrar modal
      onHide();
    } catch (error) {
      setToastVariant("danger");
      setToastMsg("❌ Error al guardar el producto");
      setShowToast(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Entidad</Form.Label>
              <Form.Control
                type="text"
                value={entidad}
                onChange={(e) => setEntidad(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  {" "}Guardando...
                </>
              ) : (
                "Guardar Producto"
              )}
            </Button>
          </Form>
          <LoadingOverlay show={loading} />
        </Modal.Body>
      </Modal>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg={toastVariant}
          show={showToast}
          autohide
          delay={3000}
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <strong className="me-auto">Productos</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default AddProductoModal;
