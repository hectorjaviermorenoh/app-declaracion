import React from "react";
import "./ProductoCard.scss";
import { Card, Button } from "react-bootstrap";

export default function ProductoCard({ producto, onUpload }) {
  return (
    <Card className={`producto-card ${producto.cargado ? "cargado" : ""}`}>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Button
          variant={producto.cargado ? "success" : "primary"}
          onClick={() => onUpload(producto)}
        >
          {producto.cargado ? "Actualizar Archivo" : "Subir Archivo"}
        </Button>
      </Card.Body>
    </Card>
  );
}
