import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Donaciones.scss";
// Importamos la imagen del QR desde assets
import qrNequi from "../../assets/img/qr_nequi.png";

export default function Donaciones() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(false);
  const numeroNequi = "3103434753";

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(numeroNequi);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="donaciones-container container my-5 animate__animated animate__fadeIn">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-7">

          <button
            className="btn btn-outline-secondary btn-sm mb-4"
            onClick={() => navigate(-1)}
          >
            <i className="bi bi-arrow-left me-2"></i>Volver
          </button>

          <div className="card shadow-lg border-0 p-4 p-md-5 text-center">

            <header className="mb-3 text-center">
                <div className="badge bg-warning-soft text-warning p-3 mb-3 fs-4 rounded-circle">
                    <i className="bi bi-cup-hot-fill"></i>
                </div>
                <h1 className="fw-bold text-dark">¿Te gustaría invitarme un café?</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '500px' }}>
                    AppDeclaración es y seguirá siendo una herramienta <strong>totalmente gratuita</strong>.
                    Si te ha sido útil, cualquier aporte voluntario es bienvenido para apoyar su mantenimiento.
                </p>
            </header>

            <div className="row g-4 align-items-center mb-5">

                {/* Columna del QR */}
                <div className="col-md-6 border-end-md">
                    <div className="qr-wrapper p-3 bg-white border rounded-4 shadow-sm mx-auto" style={{ maxWidth: '250px' }}>
                        <img
                            src={qrNequi}
                            alt="Código QR Nequi para donaciones"
                            className="img-fluid rounded-3"
                        />
                    </div>
                    <div className="small text-muted mt-2">Escanea desde tu app Nequi</div>
                </div>

                {/* Columna de Datos Manuales */}
                <div className="col-md-6 text-md-start px-md-4">
                    <h6 className="text-uppercase fw-bold text-secondary mb-3 small">Medios en Colombia</h6>

                    <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-nequi me-2">Nequi</span>
                        <span className="badge bg-breb">Bre-B</span>
                    </div>

                    <div className="info-cuenta p-3 border rounded-3 bg-white shadow-sm mb-3">
                        <div className="small text-muted mb-1">Número de cuenta / Celular</div>
                        <div className="h4 fw-bold mb-1 text-dark letter-spacing-1">{numeroNequi}</div>
                        <div className="small text-primary fw-medium">A nombre de: Hector Javier Moreno</div>
                    </div>

                    <button
                        className={`btn ${copiado ? 'btn-success' : 'btn-outline-dark'} w-100 fw-bold`}
                        onClick={copiarAlPortapapeles}
                    >
                        <i className={`bi ${copiado ? 'bi-check-all' : 'bi-clipboard'} me-2`}></i>
                        {copiado ? '¡Copiado!' : 'Copiar número'}
                    </button>
                </div>

            </div>

            {/* <div className="disclaimer p-3 rounded-3 text-center mx-auto" style={{ maxWidth: '600px' }}>
              <i className="bi bi-info-circle me-2"></i>
              Tu apoyo ayuda a cubrir costos de hosting, dominio y tiempo de desarrollo. <strong>¡Muchas gracias!</strong>
            </div> */}
            <div className="disclaimer p-3 rounded-3 text-center mx-auto" style={{ maxWidth: '600px' }}>
              <i className="bi bi-rocket-takeoff me-2"></i>
              Tu apoyo es un reconocimiento al tiempo que <strong>AppDeclaración</strong> te ha ahorrado
              en la recopilación de tus documentos. <strong>¡Gracias por valorar este desarrollo!</strong>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}