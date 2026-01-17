import React from "react";
import "./DatoTributarioSkeleton.scss";

const DatoTributarioSkeleton = () => {
  return (
    <div className="dato-tributario-skeleton">
      {/* Skeleton del Formulario de Nuevo Registro */}
      <div className="card mb-3 border-0 shadow-sm bg-light">
        <div className="card-body p-2 row g-2">
          <div className="col-5"><div className="skeleton-input"></div></div>
          <div className="col-5"><div className="skeleton-input"></div></div>
          <div className="col-2"><div className="skeleton-btn"></div></div>
        </div>
      </div>

      {/* Skeleton de la Lista */}
      <div className="list-group">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="skeleton-fila">
            {/* 1. Controles de Movimiento */}
            <div className="skeleton-controls">
              <div className="skeleton-icon-sm"></div>
              <div className="skeleton-text-xs"></div>
              <div className="skeleton-icon-sm"></div>
            </div>

            {/* 2. Etiqueta y Valor */}
            <div className="skeleton-label-box">
              <div className="skeleton-bar" style={{ width: '60%' }}></div>
            </div>

            <div className="skeleton-valor-box">
              <div className="skeleton-bar" style={{ width: '90%' }}></div>
            </div>

            {/* 3. Iconos de Acción */}
            <div className="skeleton-actions">
              <div className="skeleton-icon"></div>
              <div className="skeleton-icon"></div>
              <div className="skeleton-icon"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatoTributarioSkeleton;