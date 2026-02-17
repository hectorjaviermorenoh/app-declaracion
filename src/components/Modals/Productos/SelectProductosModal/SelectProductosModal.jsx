import React, { useState, useEffect } from "react";
import "./SelectProductosModal.scss";
import { Modal, Button, Form, Spinner } from "react-bootstrap";

export default function SelectProductosModal({ show, onClose, onConfirm, productos = [], productoOrigen, loading  }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    if (show) {
      if (productoOrigen) {
        // ✅ siempre incluir el producto origen
        setSelectedProducts([productoOrigen.id]);
      } else {
        setSelectedProducts([]);
      }
    }
  }, [show, productoOrigen]);

  const handleSelectChange = (e, id) => {
    if (id === productoOrigen?.id) {
      return; // ✅ no permitir quitar el producto origen
    }
    if (e.target.checked) {
      setSelectedProducts((prev) => [...prev, id]);
    } else {
      setSelectedProducts((prev) => prev.filter((p) => p !== id));
    }
  };

  const handleConfirm = () => {
    if (selectedProducts.length === 0) {
      alert("Debe seleccionar al menos un producto");
      return;
    }
    onConfirm(selectedProducts);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Seleccionar Productos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {productos
            // ✅ mostrar solo productos sin archivo, excepto el origen
            .filter(
              (prod) =>
                !prod.tieneArchivo || prod.id === productoOrigen?.id
            )
            .map((prod) => (
              <Form.Check
                key={prod.id}
                type="checkbox"
                label={prod.nombre}
                checked={
                  selectedProducts.includes(prod.id) ||
                  prod.id === productoOrigen?.id
                }
                disabled={prod.id === productoOrigen?.id} // origen bloqueado
                onChange={(e) => handleSelectChange(e, prod.id)}
                className="mb-2"
              />
            ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              {" "}Procesando...
            </>
          ) : (
            "Cargar archivo"
          )
        }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
