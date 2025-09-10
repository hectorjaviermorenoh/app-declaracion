import React, { useState } from "react";
import { Form, Button, Card, Toast, ToastContainer, Spinner } from "react-bootstrap";
import { useBackends } from "../context/BackendsContext";
import { useProductos } from "../context/ProductosContext";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";


function AddProducto() {
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

    if (!activeBackend.url) {
      setToastVariant("danger");
      setToastMsg("⚠️ No hay URL configurada para el backend.");
      setShowToast(true);
      return;
    }

    setLoading(true); // 👈 mostrar spinner

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

      setToastVariant("success");
      setToastMsg("✅ Producto agregado con éxito");
      setShowToast(true);

      // limpiar campos
      setNombre("");
      setDescripcion("");
      setEntidad("");
      setTipo("");

      console.log("Respuesta backend:", data);

      // 🔄 refrescar productos globales
      await refreshProductos();

    } catch (error) {
      setToastVariant("danger");
      setToastMsg("❌ Error al guardar el producto");
      setShowToast(true);
      console.error(error);
    } finally {
      setLoading(false); // 👈 ocultar spinner
    }
  };

  return (
    <div className="container mt-4">
      <Card className="shadow p-4">
        <h3>Adicionar Producto</h3>

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

        {/* Overlay de carga global */}
        <LoadingOverlay show={loading} />

      </Card>

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
    </div>
  );
}

export default AddProducto;
