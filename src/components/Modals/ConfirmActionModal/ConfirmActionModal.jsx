import React, { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";
import "./ConfirmActionModal.scss";

/**
 * Modal de confirmación genérico con switch de seguridad.
 *
 * Props:
 * - show: boolean → controla visibilidad del modal
 * - onHide: function → cierra el modal
 * - title: string → título del modal (ej: "Eliminar Producto")
 * - message: string o JSX → texto descriptivo o advertencia
 * - confirmLabel: string → texto del botón principal (ej: "Eliminar", "Limpiar Logs")
 * - confirmVariant: string → color del botón principal (ej: "danger", "primary")
 * - onConfirm: async function → acción a ejecutar al confirmar
 */
export default function ConfirmActionModal({
  show,
  onHide,
  title = "Confirmar acción",
  message = "¿Deseas continuar con esta operación?",
  confirmLabel = "Confirmar",
  confirmVariant = "primary",
  onConfirm
}) {
  const [confirmado, setConfirmado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!onConfirm) return;
    setLoading(true);
    await onConfirm();
    setLoading(false);
    setConfirmado(false);
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {typeof message === "string" ? <p>{message}</p> : message}
          <Form.Check
            type="switch"
            id="confirm-action-switch"
            label={confirmado ? "Confirmado (acción habilitada)" : "Desactivado"}
            checked={confirmado}
            onChange={(e) => setConfirmado(e.target.checked)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>

          <Button variant={confirmVariant} onClick={handleConfirm} disabled={!confirmado || loading}>
               {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  {" "}Guardando...
                </>
              ) : (
                confirmLabel
              )}

          </Button>
        </Modal.Footer>
      </Modal>

      <LoadingOverlay show={loading} />
    </>
  );
}
