import React, { useState, useEffect, useMemo } from "react";
import { Spinner } from "react-bootstrap";
import { useFacturas } from "../../context/FacturasContext";

import AddFacturaModal from "../../components/Modals/Facturas/AddFacturaModal/AddFacturaModal";
import EditFacturaModal from "../../components/Modals/Facturas/EditFacturaModal/EditFacturaModal";

import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import FacturaSkeleton from "../../components/Skeletons/FacturaSkeleton/FacturaSkeleton";
import { usePermisos } from "../../hooks/usePermisos.js";

import "./Facturas.scss";

function Facturas() {

  const { puede } = usePermisos();
  const getFacturasPer = puede("obtenerFacturasPorAnio");
  const uploadFacturaPer = puede("subirArchivoFacturas");
  const updateFacturaPer = puede("actualizarFactura");
  const deleteFacturaPer = puede("eliminarFactura");

  const isMobile = window.innerWidth < 768;
  const currentYear = new Date().getFullYear();

  const { loading, fetchFacturasPorAnio, deleteFactura } = useFacturas();

  const [anio, setAnio] = useState(currentYear);
  const [facturas, setFacturas] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [filtroEntidad, setFiltroEntidad] = useState("");
  const [filtroPago, setFiltroPago] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);


  // useEffect(() => {
  //   fetchFacturasPorAnio(anio).then(setFacturas);
  // }, [anio, fetchFacturasPorAnio]);

  useEffect(() => {
    if (!getFacturasPer) {
      setFacturas([]);
      return;
    }

    fetchFacturasPorAnio(anio).then(setFacturas);
  }, [anio, fetchFacturasPorAnio, getFacturasPer]);



  const totalValor = useMemo(() => {
    return facturas
      .filter((f) => (!filtroEntidad || f.entidad === filtroEntidad))
      .filter((f) => (!filtroPago || f.metodoPago === filtroPago))
      .reduce((acc, f) => acc + Number(f.valor || 0), 0);
  }, [facturas, filtroEntidad, filtroPago]);

  const facturasFiltradas = useMemo(() => {
    return facturas
      .filter((f) => (!filtroEntidad || f.entidad === filtroEntidad))
      .filter((f) => (!filtroPago || f.metodoPago === filtroPago));
  }, [facturas, filtroEntidad, filtroPago]);

  const formatCurrency = (v) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(v);

  const handleOpenFactura = (f) => {
    window.open(f.link, "_blank");
  };

  const handleDelete = async () => {
    if (!facturaSeleccionada) return;
    const resp = await deleteFactura(facturaSeleccionada.registroId);

    if (resp.ok) {
      setFacturas((prev) =>
        prev.filter((f) => f.registroId !== facturaSeleccionada.registroId)
      );
    }

    setShowDeleteModal(false);
    setFacturaSeleccionada(null);
  };

  const entidades = [...new Set(facturas.map((f) => f.entidad))];
  const metodos = [...new Set(facturas.map((f) => f.metodoPago))];

  const refrescarLista = () => {
    fetchFacturasPorAnio(anio).then(setFacturas);
  };


  return (
    <div className="container mt-4 facturas-container">
      <div className="header-flex">
        <h2>🧾 Facturas {anio}</h2>

        <div className="d-flex align-items-center gap-3">
          <strong>Total: {formatCurrency(totalValor)}</strong>

          {/* DESKTOP: Botón normal */}
          {!isMobile && (
            <button
              disabled={!uploadFacturaPer}
              className="btn btn-primary"
              onClick={() => setShowModal(true)}>
              ➕ Subir factura
            </button>
          )}
        </div>
      </div>

      {/* SIN PERMISO DE LECTURA */}
      {!getFacturasPer ? (
        <div className="Facturas-Loading-CargandoFacturas">
          <p>No tienes permisos para visualizar facturas.</p>
        </div>
      ) : (
        <>

          {/* FILTROS */}
          <div className="filtros d-flex gap-2 my-3">
            <select className="form-select w-auto" value={anio} onChange={(e) => setAnio(e.target.value)}>
              {Array.from({ length: 10 }).map((_, i) => {
                const y = currentYear - i;
                return <option key={y}>{y}</option>;
              })}
            </select>
            <select
              className="form-select w-auto" value={filtroEntidad} onChange={(e) => setFiltroEntidad(e.target.value)}>
              <option value="">Todas las entidades</option>
              {entidades.map((ent) => (
                <option key={ent} value={ent}>
                  {ent}
                </option>
              ))}
            </select>
            <select
              className="form-select w-auto" value={filtroPago} onChange={(e) => setFiltroPago(e.target.value)}>
              <option value="">Todos los métodos</option>
              {metodos.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* --- LÓGICA DE RENDERIZADO (Skeleton vs Contenido) --- */}
          {loading ? (
            // VISTA CARGANDO: Muestra Skeletons
            !isMobile ? (
              <div className="table-responsive facturas-por-anio">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Entidad</th>
                      <th>Descripción</th>
                      <th>Valor</th>
                      <th>Método</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FacturaSkeleton key={i} isMobile={false} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="facturas-mobile">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FacturaSkeleton key={i} isMobile={true} />
                ))}
              </div>
            )
          ) : facturasFiltradas.length === 0 ? (
            // VISTA VACÍA: No hay datos
            <div className="Facturas-Loading-CargandoFacturas">
              <p>No hay facturas con esos filtros.</p>
            </div>
          ) : (
            // VISTA CON DATOS: Renderizado normal
            <>
              {/* VISTA DESKTOP */}
              {!isMobile && (
                <div className="table-responsive facturas-por-anio">
                  <table className="table table-bordered table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Entidad</th>
                        <th>Descripción</th>
                        <th>Valor</th>
                        <th>Método</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {facturasFiltradas.map((f) => (
                        <tr key={f.registroId}>
                          <td onClick={() => handleOpenFactura(f)}>{f.entidad}</td>
                          <td onClick={() => handleOpenFactura(f)}>{f.descripcion}</td>
                          <td onClick={() => handleOpenFactura(f)}>{formatCurrency(f.valor)}</td>
                          <td onClick={() => handleOpenFactura(f)}>{f.metodoPago}</td>
                          <td className="acciones">
                            {/* EDITAR */}
                            <i
                              className={`bi bi-pencil-square accion-icon ${!updateFacturaPer ? 'disabled-icon' : ''}`}
                              title={updateFacturaPer ? "Editar" : "No tienes permisos para editar"}
                              onClick={() => {
                                if (!updateFacturaPer) return;
                                setFacturaSeleccionada(f);
                                setShowEditModal(true);
                              }}
                            ></i>

                            {/* ELIMINAR */}
                            <i
                              className={`bi bi-x-circle accion-icon text-danger ${!deleteFacturaPer ? 'disabled-icon' : ''}`}
                              title={deleteFacturaPer ? "Eliminar" : "No tienes permisos para eliminar"}
                              onClick={() => {
                                if (!deleteFacturaPer) return;
                                setFacturaSeleccionada(f);
                                setShowDeleteModal(true);
                              }}
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* VISTA MÓVIL */}
              {isMobile && (
                <div className="facturas-mobile">
                  {facturasFiltradas.map((f) => (
                    <div className="factura-card" key={f.registroId} onClick={() => handleOpenFactura(f)}>
                      <div className="card-top">
                        <div className="entidad">{f.entidad}</div>
                        <div className="valor">{formatCurrency(f.valor)}</div>
                      </div>
                      <div className="descripcion">{f.descripcion}</div>
                      <div className="acciones-mobile">
                        <i
                          // className="bi bi-pencil-square accion-icon"
                          className={`bi bi-pencil-square accion-icon ${!updateFacturaPer ? 'disabled-icon' : ''}`}
                          title={updateFacturaPer ? "Editar" : "No tienes permisos para editar"}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!updateFacturaPer) return;
                            setFacturaSeleccionada(f);
                            setShowEditModal(true);
                          }}
                        ></i>
                        <i
                          className={`bi bi-x-circle accion-icon text-danger ${!deleteFacturaPer ? 'disabled-icon' : ''}`}
                          title={deleteFacturaPer ? "Eliminar" : "No tienes permisos para eliminar"}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!deleteFacturaPer) return;
                            setFacturaSeleccionada(f);
                            setShowDeleteModal(true);
                          }}
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* FAB — SOLO MÓVIL */}
      {isMobile && uploadFacturaPer && (
        <button className="fab-subir" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-lg"></i>
        </button>
      )}

      {/* MODALES */}
      {showModal && uploadFacturaPer && (
        <AddFacturaModal
          onClose={() => setShowModal(false)}
          onSaved={refrescarLista}
        />
      )}

      <ConfirmActionModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        title="Eliminar factura"
        message={
          <>
            ¿Seguro que deseas eliminar la factura de{" "}
            <strong>{facturaSeleccionada?.entidad}</strong> por{" "}
            <strong>{formatCurrency(facturaSeleccionada?.valor || 0)}</strong>?
          </>
        }
        confirmLabel="Eliminar"
        confirmVariant="danger"
        onConfirm={handleDelete}
      />

      <EditFacturaModal
        show={showEditModal}
        factura={facturaSeleccionada}
        onHide={() => setShowEditModal(false)}
        onUpdated={refrescarLista}
      />
    </div>
  );

}

export default Facturas;
