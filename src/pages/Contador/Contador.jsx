import React, { useEffect, useState, useCallback } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProductos } from "../../context/ProductosContext.jsx";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import EditRegistroProducto from "../../components/Modals/EditRegistroProductoModal/EditRegistroProductoModal";
import ContadorSkeleton from "../../components/Skeletons/ContadorSkeleton/ContadorSkeleton";
import { usePermisos } from "../../hooks/usePermisos.js";

import "./Contador.scss";

function Contador() {

  const { puede } = usePermisos();
  const editRecord = puede("editarRegistroProducto");
  const deleteRecord = puede("eliminarRegistroProducto");

  console.log("editar", editRecord);
  console.log("borrar", deleteRecord);



  const isMobile = window.innerWidth < 768; // 🔥 Detectar móvil

  const { loading, fetchArchivosPorAnio, deleteRegistroProducto } = useProductos();
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const [anio, setAnio] = useState(currentYear - 1);
  const [archivos, setArchivos] = useState([]);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [filters, setFilters] = useState({
    entidad: "",
    nombreProducto: "",
    tipo: "",
  });

  // 🔥 Controlar qué acordeón está abierto
  const [openItem, setOpenItem] = useState(null);

  const toggleOpen = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const cargarArchivos = useCallback(async (anioSeleccionado) => {
    try {
       const response = await fetchArchivosPorAnio(anioSeleccionado);
       setArchivos(response || []);
    } catch (e) {
      console.error("❌ Error cargando archivos:", e);
    }
  }, [fetchArchivosPorAnio]);

  useEffect(() => {
    setFilters({ entidad: "", nombreProducto: "", tipo: "" });
    cargarArchivos(anio);
    setCheckingAuth(false); // ✅ ya verificamos token
  }, [anio, cargarArchivos, navigate]);



  const getFileIcon = (filename) => {
    if (!filename) return "📄";
    const ext = filename.split(".").pop().toLowerCase();
    switch (ext) {
      case "pdf":
        return <span class="icon-pdf"></span>;
      case "doc":
        return <span class="icon-microsoftword"></span>;
      case "docx":
        return <span class="icon-microsoftword"></span>;
      case "xls":
        return <span class="icon-excel"></span>;
      case "xlsx":
        return <span class="icon-excel"></span>;
      case "ppt":
      case "pptx":
        return "📽️";
      case "jpg":
        return <span class="icon-jpg"></span>;
      case "jpeg":
        return <span class="icon-JPEG"></span>;
      case "png":
        return <span class="icon-png"></span>;
      case "gif":
        return "🖼️";
      case "txt":
        return <span class="icon-texto"></span>;
      case "zip":
      case "rar":
        return "🗜️";
      default:
        return "📄";
    }
  };

  // 🔹 Normalización para evitar duplicados (acentos, espacios, mayúsculas)
  const normalizeText = (str) =>
    (str || "")
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // elimina tildes

  // 🔹 Filtrado + orden por entidad
  const filteredArchivos = archivos
    .filter((a) => {
      const entidad = normalizeText(a.entidad);
      const producto = normalizeText(a.nombreProducto);
      const tipo = normalizeText(a.tipo);

      return (
        (filters.entidad ? entidad === filters.entidad : true) &&
        (filters.nombreProducto ? producto === filters.nombreProducto : true) &&
        (filters.tipo ? tipo === filters.tipo : true)
      );
    })
    .sort((a, b) => normalizeText(a.entidad).localeCompare(normalizeText(b.entidad)));

  // 🔹 Listas únicas con clave normalizada y label original
  const entidades = [
    ...new Map(
      archivos.map((a) => [
        normalizeText(a.entidad),
        { value: normalizeText(a.entidad), label: (a.entidad || "").trim() },
      ])
    ).values(),
  ];

  const productos = [
    ...new Map(
      filteredArchivos.map((a) => [
        normalizeText(a.nombreProducto),
        { value: normalizeText(a.nombreProducto), label: (a.nombreProducto || "").trim() },
      ])
    ).values(),
  ];

  const tipos = [
    ...new Map(
      filteredArchivos.map((a) => [
        normalizeText(a.tipo),
        { value: normalizeText(a.tipo), label: (a.tipo || "").trim() },
      ])
    ).values(),
  ];

  if (checkingAuth) {
    return (
      <div className="text-center p-5">
        <p>Verificando sesión...</p>
      </div>
    );
  }


  const handleDelete = async () => {
    if (!registroSeleccionado) return;
    const resp = await deleteRegistroProducto(registroSeleccionado.registroId);

    if (resp.ok) {
      setArchivos((prev) =>
        prev.filter(
          (a) => a.registroId !== registroSeleccionado.registroId
        )
      );
    }
    setShowDeleteModal(false);
    setRegistroSeleccionado(null);
  };


  return (
    <div className="contador-container">
      <div className="container mt-4">
        <h2 className="mb-3">📂 Archivos del año {anio}</h2>

        <div className="mb-3">
          <label>Año:</label>
          <select
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
            className="form-select w-auto d-inline ms-2"
          >
            {Array.from({ length: 15 }).map((_, i) => {
              const y = currentYear - i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
        </div>

        {/* --- LÓGICA DE RENDERIZADO PRINCIPAL --- */}
        {!isMobile ? (
          /* VISTA DESKTOP: Tabla */
          <div className="table-responsive archivos-por-anio">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th className="thicon"></th>
                  <th>
                    Entidad
                    <select
                      className="form-select form-select-sm mt-1"
                      disabled={loading}
                      value={filters.entidad}
                      onChange={(e) =>
                        setFilters({ ...filters, entidad: e.target.value })
                      }
                    >
                      <option value="">Todas</option>
                      {!loading &&
                        entidades.map((ent) => (
                          <option key={ent.value} value={ent.value}>
                            {ent.label}
                          </option>
                        ))}
                    </select>
                  </th>

                  <th>
                    Nombre del producto
                    <select
                      className="form-select form-select-sm mt-1"
                      disabled={loading}
                      value={filters.nombreProducto}
                      onChange={(e) =>
                        setFilters({ ...filters, nombreProducto: e.target.value })
                      }
                    >
                      <option value="">Todos</option>
                      {!loading &&
                        productos.map((prod) => (
                          <option key={prod.value} value={prod.value}>
                            {prod.label}
                          </option>
                        ))}
                    </select>
                  </th>

                  <th>
                    Tipo
                    <select
                      className="form-select form-select-sm mt-1"
                      disabled={loading}
                      value={filters.tipo}
                      onChange={(e) =>
                        setFilters({ ...filters, tipo: e.target.value })
                      }
                    >
                      <option value="">Todos</option>
                      {!loading &&
                        tipos.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                    </select>
                  </th>

                  <th>Descripción</th>
                  <th className="th-acciones"></th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  /* Renderizamos Skeletons en las filas de la tabla */
                  Array.from({ length: 8 }).map((_, i) => (
                    <ContadorSkeleton key={`skel-d-${i}`} isMobile={false} />
                  ))
                ) : filteredArchivos.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center p-4">
                      No hay archivos para este año.
                    </td>
                  </tr>
                ) : (
                  filteredArchivos.map((a) => (
                    <tr
                      key={a.registroId}
                      onClick={() => window.open(a.link, "_blank")}
                    >
                      <td className="icono">{getFileIcon(a.nombreArchivo)}</td>
                      <td>{a.entidad || "-"}</td>
                      <td>{a.nombreProducto}</td>
                      <td>{a.tipo || "-"}</td>
                      <td>{a.descripcion || "-"}</td>
                      <td className="acciones">
                        <i
                          className={`bi bi-pencil-square accion-icon ${!editRecord ? 'disabled-icon' : ''}`}
                          title={editRecord ? "Editar" : "No tienes permisos para editar"}
                          onClick={(e) => {
                            if (!editRecord) return;
                            e.stopPropagation();
                            setRegistroSeleccionado(a);
                            setShowEditModal(true);
                          }}
                        ></i>
                        <i
                          className={`bi bi-x-circle accion-icon text-danger ${!deleteRecord ? 'disabled-icon' : ''}`}
                          title={deleteRecord ? "Eliminar" : "No tienes permisos para eliminar"}
                          onClick={(e) => {
                            if (!deleteRecord) return;
                            e.stopPropagation();
                            setRegistroSeleccionado(a);
                            setShowDeleteModal(true);
                          }}
                        ></i>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* VISTA MÓVIL: Acordeón / Cards */
          <div className="accordion-mobile">
            {loading ? (
              /* Renderizamos Skeletons tipo Card */
              Array.from({ length: 6 }).map((_, i) => (
                <ContadorSkeleton key={`skel-m-${i}`} isMobile={true} />
              ))
            ) : filteredArchivos.length === 0 ? (
              <p className="text-center p-4">No hay archivos para este año.</p>
            ) : (
              filteredArchivos.map((a, idx) => (
                <div key={a.registroId} className="archivo-card">
                  <div
                    className="accordion-header"
                    onClick={() => toggleOpen(idx)}
                  >
                    <span className="icono">{getFileIcon(a.nombreArchivo)}</span>
                    <div className="ms-2 flex-grow-1">
                      <div className="fw-bold">{a.entidad}</div>
                      <div className="text-muted small">{a.nombreProducto}</div>
                    </div>
                    <span className="arrow">
                      {openItem === idx ? "▲" : "▼"}
                    </span>
                  </div>

                  {openItem === idx && (
                    <div className="accordion-body">
                      <p><strong>Entidad:</strong> {a.entidad}</p>
                      <p><strong>Producto:</strong> {a.nombreProducto}</p>
                      <p><strong>Tipo:</strong> {a.tipo}</p>
                      <p><strong>Descripción:</strong> {a.descripcion || "-"}</p>
                      <button
                        className="btn btn-primary btn-sm w-100 mt-2"
                        onClick={() => window.open(a.link, "_blank")}
                      >
                        📄 Abrir archivo
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* MODALES */}
      <ConfirmActionModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        title="Eliminar registro"
        message={
          <>
            ¿Seguro que deseas eliminar el producto nombre{" "}
            <strong>{registroSeleccionado?.nombreProducto}</strong> entidad{" "}
            <strong>{registroSeleccionado?.entidad}</strong>?
          </>
        }
        confirmLabel="Eliminar"
        confirmVariant="danger"
        onConfirm={handleDelete}
      />

      <EditRegistroProducto
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        registro={registroSeleccionado}
        onUpdated={(registroActualizado) => {
          setArchivos((prev) =>
            prev.map((a) =>
              a.registroId === registroActualizado.registroId
                ? { ...a, ...registroActualizado }
                : a
            )
          );
        }}
      />
    </div>
  );

}

export default Contador;

