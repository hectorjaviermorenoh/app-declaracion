import React from "react";
import "./UsuarioSkeleton.scss";

const UsuarioSkeleton = ({ isMobile }) => {
  if (!isMobile) {
    return (
      <tr className="usuario-skeleton-row">
        <td><div className="skeleton-bar" style={{ width: '85%' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '70%' }}></div></td>
        <td><div className="skeleton-badge"></div></td>
        <td className="text-center"><div className="skeleton-switch"></div></td>
        <td className="text-center">
          <div className="d-flex justify-content-center gap-2">
            <div className="skeleton-button"></div>
            <div className="skeleton-button"></div>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="usuario-card skeleton-card-usuario">
      <div className="card-header d-flex align-items-center">
        <div className="skeleton-bar" style={{ width: '50%' }}></div>
        <div className="skeleton-badge ms-2"></div>
      </div>
      <div className="card-body">
        <div className="skeleton-bar mb-2" style={{ width: '30%' }}></div>
        <div className="skeleton-bar mb-3" style={{ width: '80%' }}></div>
        <div className="skeleton-switch mb-3"></div>
        <div className="d-flex gap-2">
          <div className="skeleton-button-lg"></div>
          <div className="skeleton-button-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioSkeleton;