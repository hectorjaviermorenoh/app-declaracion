import React from "react";
import "./LogSkeleton.scss";

const LogSkeleton = () => {
  return (
    <>
      {/* Skeleton para la FILA de la tabla (Escritorio) */}
      <tr className="log-skeleton-row d-none d-lg-table-row">
        <td><div className="skeleton-bar" style={{ width: '140px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '100px' }}></div></td>
        <td><div className="skeleton-bar" style={{ width: '120px' }}></div></td>
        <td><div className="skeleton-bar-rect"></div></td>
      </tr>

      {/* Skeleton para la CARD (Móvil/Tablet) */}
      <div className="log-skeleton-card d-block d-lg-none">
        <div className="log-header-skeleton">
          <div className="skeleton-bar" style={{ width: '40%' }}></div>
          <div className="skeleton-bar" style={{ width: '30%' }}></div>
        </div>
        <div className="log-body-skeleton">
          <div className="skeleton-bar mb-3" style={{ width: '60%' }}></div>
          <div className="skeleton-bar-rect"></div>
        </div>
      </div>
    </>
  );
};

export default LogSkeleton;