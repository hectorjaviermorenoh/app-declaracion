import React from "react";
import "./FacturaSkeleton.scss";

const FacturaSkeleton = ({ isMobile }) => {
  // Skeleton para la versión de escritorio (Fila de tabla)
  if (!isMobile) {
    return (
      <tr className="factura-skeleton-row">
        <td><div className="skeleton-bar" style={{ width: '120px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '250px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '80px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '100px' }}></div></td>
        <td><div className="skeleton-circle"></div></td>
      </tr>
    );
  }

  // Skeleton para la versión móvil (Card)
  return (
    <div className="factura-card skeleton-card-mobile">
      <div className="card-top">
        <div className="skeleton-bar" style={{ width: '40%' }}></div>
        <div className="skeleton-bar" style={{ width: '30%' }}></div>
      </div>
      <div className="skeleton-bar mt-3" style={{ width: '90%' }}></div>
      <div className="acciones-mobile mt-3">
        <div className="skeleton-circle"></div>
        <div className="skeleton-circle"></div>
      </div>
    </div>
  );
};

export default FacturaSkeleton;