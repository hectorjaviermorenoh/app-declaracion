// src/components/productos/UploadModal/UploadModal.jsx
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import "./UploadModal.scss";

import { useFormValidator } from "../../../hooks/useFormValidator";
import FormErrorList from "../../FormErrorList/FormErrorList";

export default function UploadModal({ show, onClose, onConfirm, title, anioDefault }) {
  const { errors, validateField, validateForm, clearErrors, clearError } = useFormValidator();
  const currentYear = String(new Date().getFullYear() - 1);

  const [loading, setLoading] = useState(false);

  const [anio, setAnio] = useState("");
  const [aplicaVarios, setAplicaVarios] = useState(false);
  const [file, setFile] = useState(null);
  const [replaceOnlyThis, setReplaceOnlyThis] = useState(false);

  // Reset al abrir modal
  useEffect(() => {
    if (show) {
      clearErrors();
      setAnio(anioDefault || currentYear);  // ✅ set default year
      setAplicaVarios(false);
      setFile(null);
      setReplaceOnlyThis(false);
      setLoading(false);
    }
  }, [show, anioDefault, currentYear, clearErrors]);

  const handleSubmit = async () => {
    clearErrors();

    const camposAValidar = {
      anio,
      archivo: file,
    };

    const isValid = validateForm(camposAValidar);
    if (!isValid) return;

    setLoading(true);

    try {
      const effectiveAplicaVarios =
        title === "Remplazar archivo" ? false : aplicaVarios;

      await onConfirm(anio, effectiveAplicaVarios, file, replaceOnlyThis);

    } catch (error) {
      console.log("Error en el modal:", error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {title === "Remplazar archivo" ? "Reemplazar archivo" : "Subir archivo"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* 🔥 listado de errores */}
        <FormErrorList errors={errors} />

        <Form>
          <Form.Group>
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="number"
              placeholder={`Ejm: ${new Date().getFullYear() - 1}`}
              value={anio}
              onChange={(e) => {
                setAnio(e.target.value);
                clearError("anio");
              }}
              onBlur={(e) => validateField("anio", e.target.value)}
              disabled={title === "Remplazar archivo"}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Archivo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                validateField("archivo", e.target.files[0]);
              }}
            />
          </Form.Group>

          {/* Checkbox para nuevos archivos */}
          {title !== "Remplazar archivo" && (
            <Form.Group className="mt-3">
              <Form.Check
                type="checkbox"
                label="Este archivo aplica a varios productos"
                checked={aplicaVarios}
                onChange={(e) => setAplicaVarios(e.target.checked)}
              />
            </Form.Group>
          )}

          {/* Checkbox para reemplazar un archivo ya existente */}
          {title === "Remplazar archivo" && (
            <Form.Group className="mt-3">
              <Form.Check
                type="checkbox"
                label="Reemplazar solo en este producto"
                checked={replaceOnlyThis}
                onChange={(e) => setReplaceOnlyThis(e.target.checked)}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} disabled={loading}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={loading}>

          {loading ? (
            <>
              <Spinner size="sm" /> Procesando...
            </>
          ) : (
            title === "Remplazar archivo" ? "Reemplazar" : "Cargar archivo"
          )}

        </Button>
      </Modal.Footer>
    </Modal>
  );
}
