import React from "react";
import { Col, Card } from "react-bootstrap";
import "./ProductSkeleton.scss";

const ProductSkeleton = () => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-3">
      <Card className="producto-card-skeleton">
        <Card.Body>
          {/* Espacio para el botón de cerrar (esquina superior derecha) */}
          <div className="skeleton-close-btn"></div>

          {/* Título (Entidad + Nombre) */}
          <div className="skeleton-placeholder skeleton-title"></div>

          {/* Descripción */}
          <div className="skeleton-placeholder skeleton-text"></div>
          <div className="skeleton-placeholder skeleton-text short"></div>

          {/* Botón de acción */}
          <div className="skeleton-placeholder skeleton-button"></div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductSkeleton;