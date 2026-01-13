import React from "react";
import "./RolSkeleton.scss";

const RolSkeleton = () => {
  return (
    <tr className="rol-skeleton-row">
      <td data-label="Rol">
        <div className="d-flex align-items-center">
          <div className="skeleton-bar" style={{ width: '120px' }}></div>
        </div>
      </td>
      <td data-label="Permisos">
        <div className="d-flex flex-column gap-2">
          <div className="skeleton-bar" style={{ width: '90%' }}></div>
          <div className="skeleton-bar" style={{ width: '70%' }}></div>
        </div>
      </td>
      <td className="td-acciones text-center" data-label="Acciones">
        <div className="d-flex justify-content-center gap-2">
          <div className="skeleton-btn-rect"></div>
          <div className="skeleton-btn-rect"></div>
        </div>
      </td>
    </tr>
  );
};

export default RolSkeleton;