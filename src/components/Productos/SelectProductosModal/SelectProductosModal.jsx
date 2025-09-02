import React, { useState } from "react";
import "./SelectProductosModal.scss";
import { Modal, Button, Form } from "react-bootstrap";

export default function SelectProductosModal({ show, productos, onClose, onConfirm }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    onConfirm(selectedIds);
    setSelectedIds([]);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Seleccionar Productos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {productos.map((prod) => (
            <Form.Check
              key={prod.id}
              type="checkbox"
              label={prod.nombre}
              checked={selectedIds.includes(prod.id)}
              onChange={() => handleToggle(prod.id)}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Subir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
