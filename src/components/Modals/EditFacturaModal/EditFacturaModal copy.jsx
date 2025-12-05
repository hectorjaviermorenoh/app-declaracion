import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useFacturas } from "../../../context/FacturasContext";
import "./EditFacturaModal.scss";

function EditFacturaModal({ show, onHide, factura, onUpdated }) {
  const { updateFactura } = useFacturas();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    entidad: "",
    descripcion: "",
    valor: "",
    metodoPago: "",
    registroId: "",
  });

  // Cargar factura en el formulario
  useEffect(() => {
    if (factura) {
      setFormData({
        registroId: factura.registroId,
        entidad: factura.entidad,
        descripcion: factura.descripcion,
        valor: factura.valor,
        metodoPago: factura.metodoPago,
      });
    }
  }, [factura]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const resp = await updateFactura(formData);

    if (resp.ok) {
      setLoading(false);
      onUpdated(); // Notifica a Facturas.jsx para refrescar lista
      onHide();
    } else {
      alert(resp.mensaje || "Error al actualizar la factura");
    }
  };

  if (!factura) return null;

  return (
    <div className="edit-factura-modal">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>✏️ Editar factura</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Entidad</Form.Label>
              <Form.Control
                type="text"
                name="entidad"
                value={formData.entidad}
                onChange={handleChange}
                placeholder="Entidad"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Descripción"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="number"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                placeholder="Ej: 25000"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Método de pago</Form.Label>
              <Form.Control
                type="text"
                name="metodoPago"
                value={formData.metodoPago}
                onChange={handleChange}
                placeholder="Ej: Nequi, Daviplata, Tarjeta Crédito"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>

          <Button variant="primary" onClick={handleSubmit}>

               {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  {" "}Guardando...
                </>
              ) : (
                "Guardar cambios "
              )}

          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditFacturaModal;
