import React, { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import "./ReinitModal.scss";

export default function ReinitModal({ show, onHide, onConfirm, loading }) {
  const [confirmText, setConfirmText] = useState("");
  const [borrarCarpetas, setBorrarCarpetas] = useState(false);

  const handleSubmit = () => {
    onConfirm(confirmText, borrarCarpetas);
    setConfirmText(""); // limpiar
    setBorrarCarpetas(false);
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
            className="mt-2 modal-reinit-checkbox"
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
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" /> Inicializando...
            </>
          ) : (
            "Reinicializar"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
