import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ReinitModal({ show, onHide, onConfirm }) {
  const [confirmText, setConfirmText] = useState("");
  const [borrarCarpetas, setBorrarCarpetas] = useState(true);

  const handleSubmit = () => {
    onConfirm(confirmText, borrarCarpetas);
    setConfirmText(""); // limpiar
    setBorrarCarpetas(true);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>⚠️ Reinicializar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Esta acción <strong>eliminará todos los datos</strong> y reiniciará la aplicación.
        </p>
        <p>Para confirmar, escriba <strong>INICIALIZAR</strong>:</p>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="INICIALIZAR"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
            />
          </Form.Group>
          <Form.Check
            type="checkbox"
            label="Borrar también las carpetas de archivos"
            checked={borrarCarpetas}
            onChange={(e) => setBorrarCarpetas(e.target.checked)}
            className="mt-2"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
        <Button
          variant="danger"
          disabled={confirmText !== "INICIALIZAR"}
          onClick={handleSubmit}
        >
          Reinicializar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
