import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./LoadingOverlay.scss";

const LoadingOverlay = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loading-overlay">
      <Spinner animation="border" variant="light" />
      <span className="loading-text">Procesando...</span>
    </div>
  );
};

export default LoadingOverlay;
