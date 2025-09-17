import React, { useState } from "react";
import { Modal, Form, Button, Toast, ToastContainer, Spinner } from "react-bootstrap";

import { useBackends } from "../../context/BackendsContext.jsx";
import { useProductos } from "../../context/ProductosContext.jsx";

import LoadingOverlay from "../LoadingOverlay/LoadingOverlay.jsx";
import "./AddProductoModal.scss";

function AddProductoModal({ show, onHide, onProductoAgregado }) {
  const { activeBackend } = useBackends();
  const { refreshProductos } = useProductos();

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
    if (!activeBackend) {
      setToastVariant("danger");
      setToastMsg("⚠️ No hay URL configurada para el backend.");
      setShowToast(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${activeBackend.url}/producto`, {
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

      // setToastVariant("success");
      // setToastMsg("✅ Producto agregado con éxito");
      // setShowToast(true);

      // notificar al padre que hay un producto nuevo
      // if (onProductoAgregado) onProductoAgregado(data);
      // await refreshProductos();

      // limpiar
      // setNombre("");
      // setDescripcion("");
      // setEntidad("");
      // setTipo("");

      // cerrar modal
      // onHide();

      if (data.status === "ok") {+
        setToastVariant("success");
        setToastMsg("✅ Producto agregado con éxito");
        setShowToast(true);

        if (onProductoAgregado) onProductoAgregado(data);
        await refreshProductos();

        // limpiar
        setNombre("");
        setDescripcion("");
        setEntidad("");
        setTipo("");

        // cerrar modal
        onHide();
      } else {
        setToastVariant("danger");
        setToastMsg(`❌ ${data.mensaje || "Error al guardar el producto"}`);
        setShowToast(true);
      }

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
                placeholder="Ej: Tarjeta 6992, Cta 1108, Medicina prepagada, Factura Notaria 38"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ej: Certificado de retenciones año 2024, Extracto bancario, Factura de póliza de salud"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Entidad</Form.Label>
              <Form.Control
                type="text"
                value={entidad}
                onChange={(e) => setEntidad(e.target.value)}
                placeholder="Ej: Banco de Bogotá, Seguros Sura, Ecopetrol, Colpensiones, Notaria 38"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                placeholder="Ej: Inversión, Ahorro, Deuda, Certificado, Salud, Credito, Debito"
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
