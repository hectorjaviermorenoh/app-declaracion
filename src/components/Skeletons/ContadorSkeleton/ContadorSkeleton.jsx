import React from "react";
import "./ContadorSkeleton.scss";

const ContadorSkeleton = ({ isMobile }) => {
  if (!isMobile) {
    return (
      <tr className="contador-skeleton-row">
        <td className="icono"><div className="skeleton-circle"></div></td>
        <td><div className="skeleton-bar" style={{ width: '80%' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '70%' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '60%' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '90%' }}></div></td>
        <td className="acciones"><div className="skeleton-bar" style={{ width: '40px' }}></div></td>
      </tr>
    );
  }

  return (
    <div className="archivo-card skeleton-card-contador">
      <div className="accordion-header d-flex align-items-center p-3">
        <div className="skeleton-circle me-3"></div>
        <div className="flex-grow-1">
          <div className="skeleton-bar mb-2" style={{ width: '60%' }}></div>
          <div className="skeleton-bar" style={{ width: '40%' }}></div>
        </div>
        <div className="skeleton-bar" style={{ width: '15px', height: '15px' }}></div>
      </div>
    </div>
  );
};

export default ContadorSkeleton;