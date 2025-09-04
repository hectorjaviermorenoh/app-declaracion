import React, { useState,  } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./UploadModal.scss";

export default function UploadModal({ show, onClose, onConfirm, title, anioDefault }) {
  const [anio, setAnio] = useState("");
  const [aplicaVarios, setAplicaVarios] = useState(false);
  const [file, setFile] = useState(null);

  // 🔧 Cuando cambie el anioDefault (ej. al abrir modal), actualizamos el estado
  React.useEffect(() => {
    setAnio(anioDefault || "");
  }, [anioDefault]);

  const handleSubmit = () => {
    if (!anio || !file) {
      alert("⚠️ Debe seleccionar año y archivo");
      return;
    }
    onConfirm(anio, aplicaVarios, file);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        {/* <Modal.Title>{title}</Modal.Title> */}
        <Modal.Title>
          {title === "Remplazar archivo" ? "Reemplazar archivo" : "Subir archivo"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="number"
              placeholder={`Ejm: ${new Date().getFullYear() - 1}`}
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              disabled={title === "Remplazar archivo"} // 👈 bloqueamos cuando es reemplazo
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Archivo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          {/* <Form.Group className="mt-3">
            <Form.Check
              type="checkbox"
              label="Este archivo aplica a varios productos"
              checked={aplicaVarios}
              onChange={(e) => setAplicaVarios(e.target.checked)}
            />
          </Form.Group> */}
          <Form.Group className="mt-3">
            {title !== "Remplazar archivo" && (
              <Form.Check
                type="checkbox"
                label="Este archivo aplica a varios productos"
                checked={aplicaVarios}
                onChange={(e) => setAplicaVarios(e.target.checked)}
              />
            )}
          </Form.Group>

        </Form>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>Subir</Button>
      </Modal.Footer> */}
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {title === "Remplazar archivo" ? "Reemplazar" : "Subir"}
        </Button>
      </Modal.Footer>

    </Modal>
  );
}
