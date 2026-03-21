import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AcercaDe.scss"; // Si deseas estilos específicos

export default function AcercaDe() {
  const navigate = useNavigate();

  return (
    <div className="acerca-de-container container my-5 animate__animated animate__fadeIn">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">

          {/* Botón Volver */}
          <button
            className="btn btn-outline-secondary btn-sm mb-4"
            onClick={() => navigate(-1)}
          >
            <i className="bi bi-arrow-left me-2"></i>Volver
          </button>

          <div className="card shadow-sm p-4 p-md-5">
            <header className="text-center mb-5">
              <h1 className="fw-bold text-primary">AppDeclaración</h1>
              <p className="lead text-muted">Tu asistente personal para la organización tributaria</p>
            </header>

            <section className="mb-5">
              <h4 className="fw-bold border-bottom pb-2 mb-3">¿Qué es AppDeclaración?</h4>
              <p>
                Es una solución tecnológica diseñada para eliminar el estrés de la temporada de impuestos.
                Su propósito principal es ayudarte a recopilar, organizar y visualizar los certificados
                y facturas necesarios para tu declaración de renta de forma eficiente y centralizada.
              </p>
            </section>

            <section className="mb-5">
              <h4 className="fw-bold border-bottom pb-2 mb-3">Características Principales</h4>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="badge bg-primary-soft text-primary p-3 me-3">
                      <i className="bi bi-folder-check fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Organización Inteligente</h6>
                      <p className="small text-muted">Archivos organizados automáticamente por año gravable y categorías.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="badge bg-success-soft text-success p-3 me-3">
                      <i className="bi bi-shield-lock fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Privacidad Total</h6>
                      <p className="small text-muted">Los datos nunca salen de tu cuenta de Google. Tú eres el único dueño.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="badge bg-info-soft text-info p-3 me-3">
                      <i className="bi bi-camera fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Soportes y Facturas</h6>
                      <p className="small text-muted">Sube archivos o toma fotos de tus facturas de compra al instante.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="badge bg-warning-soft text-warning p-3 me-3">
                      <i className="bi bi-file-zip fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Backup Seguro</h6>
                      <p className="small text-muted">Exporta toda tu información en un archivo ZIP con un solo clic.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-light p-4 rounded mb-5">
              <h4 className="fw-bold mb-3">Arquitectura Descentralizada</h4>
              <p className="mb-0">
                A diferencia de otras aplicaciones, <strong>AppDeclaración</strong> no utiliza bases de datos centrales.
                Funciona mediante un modelo donde el frontend se conecta directamente a tu propio backend en
                <strong> Google Apps Script</strong>. Esto garantiza que tus datos tributarios residan siempre
                dentro de tu espacio personal de <strong>Google Drive</strong>.
              </p>
            </section>

            <footer className="text-center mt-5 pt-4 border-top">
              <p className="mb-1 text-muted">Desarrollado por <strong>Hector Javier Moreno</strong></p>
              <div className="mt-3">
                <p className="small mb-2">Si esta herramienta te ha sido útil, puedes apoyar su mantenimiento:</p>
                {/* <a
                  href="https://tu-link-de-donacion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning fw-bold"
                >
                  <i className="bi bi-cup-hot me-2"></i>Invítame un café
                </a> */}
                <Link to="/donaciones" className="btn btn-warning fw-bold">
                  <i className="bi bi-cup-hot me-2"></i>Invítame un café
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}