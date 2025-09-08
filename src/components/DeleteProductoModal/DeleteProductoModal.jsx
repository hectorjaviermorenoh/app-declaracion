import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

export default function DeleteProductoModal({ show, onHide, producto, onDelete }) {
  const [confirmado, setConfirmado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await onDelete(producto.id);
    setLoading(false);
    setConfirmado(false);
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¿Seguro que deseas eliminar el producto{" "}
            <strong>{producto?.nombre}</strong>?
          </p>
          <Form.Check
            type="switch"
            id="switch-confirm"
            label={confirmado ? "Prendido (Eliminar habilitado)" : "Apagado"}
            checked={confirmado}
            onChange={(e) => setConfirmado(e.target.checked)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            disabled={!confirmado || loading}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Loading Overlay */}
      <LoadingOverlay show={loading} />
    </>
  );
}
