import React from "react";
import "./LogSkeleton.scss";

// Añadimos la prop 'isTable'
const LogSkeleton = ({ isTable = false }) => {
  if (isTable) {
    // Solo devolvemos la fila para la tabla
    return (
      <tr className="log-skeleton-row">
        <td><div className="skeleton-bar" style={{ width: '140px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '100px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '120px' }}></div></td>
        <td><div className="skeleton-bar-rect"></div></td>
      </tr>
    );
  }

  // Si no es tabla, devolvemos la Card
  return (
    <div className="log-skeleton-card">
      <div className="log-header-skeleton">
        <div className="skeleton-bar" style={{ width: '40%' }}></div>
        <div className="skeleton-bar" style={{ width: '30%' }}></div>
      </div>
      <div className="log-body-skeleton">
        <div className="skeleton-bar mb-3" style={{ width: '60%' }}></div>
        <div className="skeleton-bar-rect"></div>
      </div>
    </div>
  );
};

export default LogSkeleton;