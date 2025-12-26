import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useProductos } from "../../../context/ProductosContext";
import { useFormValidator } from "../../../hooks/useFormValidator.js";
import { normalizeField } from "../../../utils/formValidator.js";
import FormErrorList from "../../../components/FormErrorList/FormErrorList";

function EditRegistroProductoModal({show,onHide,registro,onUpdated}) {

  const { editRegistroProducto} = useProductos();

  const { errors, validateField, validateForm, clearError, clearErrors } = useFormValidator();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    entidad: "",
    nombreProducto: "",
    descripcion: "",
    tipo: "",
    anio: ""
  });

  // 🔹 Cargar datos cuando se abre el modal
  useEffect(() => {
    if (registro) {
      setForm({
        entidad: registro.entidad || "",
        nombreProducto: registro.nombreProducto || "",
        descripcion: registro.descripcion || "",
        tipo: registro.tipo || "",
        anio: registro.anio || ""
      });
    }
  }, [registro]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    validateField(name, value);
    clearError(name);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrors();

    const isValid = validateForm(form);
    if (!isValid) return;

    setLoading(true);

    try {

      if (!registro?.registroId) return;

      const payload = {
        registroId: registro.registroId,
        nombreProducto: normalizeField(form.nombreProducto),
        descripcion: normalizeField(form.descripcion),
        entidad: normalizeField(form.entidad),
        tipo: normalizeField(form.tipo),
        anio: form.anio
      };

      const response = await editRegistroProducto(payload);

      if (response.ok) {
        onUpdated(response.registro); // 🔥 actualización optimista
        onHide();
      }

      if (!response.ok) throw new Error("Error al guardar registro producto");
    } catch (error) {
      console.log(error);


    } finally {
      setLoading(false);
    }

  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>✏️ Editar registro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* 🔥 MOSTRAR ERRORES DEL FORMULARIO */}
        <FormErrorList errors={errors} />

        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Entidad</Form.Label>
            <Form.Control
              name="entidad"
              value={form.entidad}
              onChange={handleChange}
              onBlur={(e) => validateField("entidad", e.target.value)}
              placeholder="Ej: Banco de Bogotá, Sura, Ecopetrol"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              name="nombreProducto"
              value={form.nombreProducto}
              onChange={handleChange}
              onBlur={(e) => validateField("nombreProducto", e.target.value)}
              placeholder="Ej: Tarjeta 6992, Cta 1108"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              onBlur={(e) => validateField("tipo", e.target.value)}
              placeholder="Ej: Salud, Deuda, Certificado"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              onBlur={(e) => validateField("descripcion", e.target.value)}
              placeholder="Ej: Extracto bancario, póliza, certificado"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="number"
              name="anio"
              value={form.anio}
              onChange={handleChange}
              onBlur={(e) => validateField("anio", e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={loading}>
          Cancelar
        </Button>

        <Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" /> Guardando...
            </>
          ) : (
            "Guardar cambios"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditRegistroProductoModal;
