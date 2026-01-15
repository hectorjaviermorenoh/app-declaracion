import React from "react";
import "./ConfigSkeleton.scss";

const ConfigSkeleton = () => {
  return (
    <div className="config-skeleton-container">
      {/* Skeleton de la Tarjeta 1: Configuración General */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="skeleton-title mb-3" style={{ width: '200px' }}></div>
        <div className="row gy-3">
          <div className="col-12 col-md-5">
            <div className="skeleton-label mb-2"></div>
            <div className="skeleton-input mb-3"></div>
            <div className="skeleton-btn" style={{ width: '180px' }}></div>
          </div>
          <div className="col-12 col-md-5">
            <div className="skeleton-label mb-2"></div>
            <div className="skeleton-input mb-3"></div>
            <div className="skeleton-label mb-2"></div>
            <div className="skeleton-input mb-1"></div>
            <div className="skeleton-text" style={{ width: '120px' }}></div>
          </div>
          <div className="col-12 col-md-2">
            <div className="skeleton-btn h-100" style={{ minHeight: '38px' }}></div>
          </div>
        </div>
      </div>

      {/* Skeleton de la Tarjeta 2: Tabla de Tipos */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex justify-content-between mb-3">
          <div className="skeleton-title" style={{ width: '250px' }}></div>
          <div className="skeleton-input" style={{ width: '200px' }}></div>
        </div>
        <div className="skeleton-table">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-table-row d-flex justify-content-between p-2 border-bottom">
              <div className="skeleton-bar" style={{ width: '40px' }}></div>
              <div className="skeleton-btn" style={{ width: '80px', height: '25px' }}></div>
            </div>
          ))}
        </div>
        <div className="text-end mt-3">
          <div className="skeleton-btn d-inline-block" style={{ width: '150px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ConfigSkeleton;