import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Toast, ToastContainer, Spinner } from "react-bootstrap";
import { useProductos } from "../../../../context/ProductosContext";
import LoadingOverlay from "../../../../components/LoadingOverlay/LoadingOverlay";
import FormErrorList from "../../../../components/FormErrorList/FormErrorList";
import { useFormValidator } from "../../../../hooks/useFormValidator";
import { normalizeField } from "../../../../utils/formValidator";

import "./AddProductoModal.scss";

function AddProductoModal({ show, onHide, productoAEditar }) {
  const { addProducto, updateProducto } = useProductos();

  const { errors, validateField, validateForm, clearError, clearErrors } = useFormValidator();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    entidadProducto: "",
    tipo: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    validateField(name, value);
    clearError(name);
  };

  useEffect(() => {
    if (show && productoAEditar) {
      // Si hay producto, llenamos el formulario (Modo Edición)
      setForm({
        nombre: productoAEditar.nombre || "",
        descripcion: productoAEditar.descripcion || "",
        entidadProducto: productoAEditar.entidad || "",
        tipo: productoAEditar.tipo || "",
      });
    } else if (show && !productoAEditar) {
      // Si no hay producto, limpiamos el formulario (Modo Adición)
      setForm({ nombre: "", descripcion: "", entidadProducto: "", tipo: "" });
      clearErrors();
    }
  }, [productoAEditar, show]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrors();

    if (!validateForm(form)) return;

    setLoading(true);

    try {
      const payload = {
        nombre: normalizeField(form.nombre),
        descripcion: form.descripcion ? normalizeField(form.descripcion) : "",
        entidad: normalizeField(form.entidadProducto), // Backend espera 'entidad'
        tipo: form.tipo ? normalizeField(form.tipo) : "",
      };

      let response;

      if (productoAEditar) {
        // ✏️ MODO EDICIÓN: Agregamos el ID al payload
        response = await updateProducto({ ...payload, id: productoAEditar.id });
      } else {
        // ➕ MODO ADICIÓN
        response = await addProducto(payload);
      }

      if (response.ok) {
        setToastVariant("success");
        setToastMsg(response.mensaje);
        setShowToast(true);
        onHide(); // Esto cerrará el modal y llamará a setSelectedProducto(null)
      } else {
        throw new Error(response.mensaje || "Error en la operación");
      }
    } catch (err) {
      setToastVariant("danger");
      setToastMsg(`❌ ${err.message}`);
      setShowToast(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Adicionar Producto</Modal.Title> */}
          <Modal.Title>{productoAEditar ? "Editar Producto" : "Adicionar Producto"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* 🔥 MOSTRAR ERRORES DEL FORMULARIO */}
          <FormErrorList errors={errors} />

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                onBlur={(e) => validateField("nombre", e.target.value)}
                placeholder="Ej: Tarjeta 6992, Cta 1108"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                onBlur={(e) => validateField("descripcion", e.target.value)}
                placeholder="Ej: Extracto bancario, póliza, certificado"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Entidad *</Form.Label>
              <Form.Control
                type="text"
                name="entidadProducto"
                value={form.entidadProducto}
                onChange={handleChange}
                onBlur={(e) => validateField("entidadProducto", e.target.value)}
                placeholder="Ej: Banco de Bogotá, Sura, Ecopetrol"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                onBlur={(e) => validateField("tipo", e.target.value)}
                placeholder="Ej: Salud, Deuda, Certificado"
              />
            </Form.Group>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Procesando...</span>
                </>
              ) : (
                productoAEditar ? "Guardar Cambios" : "Guardar Producto"
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
