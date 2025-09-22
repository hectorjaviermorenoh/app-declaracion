import React, { useEffect, useState } from "react";
import { useProductos } from "../../context/ProductosContext";
import { useToast } from "../../context/ToastContext";
import "./ArchivosPorAnio.scss";

function ArchivosPorAnio() {
  const { fetchArchivosPorAnio } = useProductos();
  const { showToast } = useToast();

  const currentYear = new Date().getFullYear();
  const [anio, setAnio] = useState(currentYear - 1);
  const [archivos, setArchivos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    entidad: "",
    nombreProducto: "",
    tipo: "",
  });

  const cargarArchivos = async (anioSeleccionado) => {
    setLoading(true);
    try {
      const data = await fetchArchivosPorAnio(anioSeleccionado);
      console.log("que data llega", data);
      setArchivos(data);
    } catch (e) {
      showToast(`❌ Error cargando archivos ${e}`, "danger");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarArchivos(anio);
    setFilters({ entidad: "", nombreProducto: "", tipo: "" }); // reset filtros
  }, [anio]);

  const getFileIcon = (filename) => {
    if (!filename) return "📄";
    const ext = filename.split(".").pop().toLowerCase();
    switch (ext) {
      case "pdf":
        return "📕";
      case "doc":
      case "docx":
        return "📝";
      case "xls":
      case "xlsx":
        return "📊";
      case "ppt":
      case "pptx":
        return "📽️";
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "🖼️";
      case "txt":
        return "📃";
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

  return (
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

      {loading ? (
        <p>Cargando...</p>
      ) : filteredArchivos.length === 0 ? (
        <p>No hay archivos para este año.</p>
      ) : (
        <div className="table-responsive archivos-por-anio">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th className="thicon"></th>
                <th>
                  Entidad
                  <select
                    className="form-select form-select-sm mt-1"
                    value={filters.entidad}
                    onChange={(e) =>
                      setFilters({ ...filters, entidad: e.target.value })
                    }
                  >
                    <option value="">Todas</option>
                    {entidades.map((ent) => (
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
                    value={filters.nombreProducto}
                    onChange={(e) =>
                      setFilters({ ...filters, nombreProducto: e.target.value })
                    }
                  >
                    <option value="">Todos</option>
                    {productos.map((prod) => (
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
                    value={filters.tipo}
                    onChange={(e) =>
                      setFilters({ ...filters, tipo: e.target.value })
                    }
                  >
                    <option value="">Todos</option>
                    {tipos.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </th>

                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {filteredArchivos.map((a) => (
                <tr
                  key={a.registroId}
                  onClick={() => window.open(a.link, "_blank")}
                >
                  <td className="icono">{getFileIcon(a.nombreArchivo)}</td>
                  <td>{a.entidad || "-"}</td>
                  <td>{a.nombreProducto}</td>
                  <td>{a.tipo || "-"}</td>
                  <td>{a.descripcion || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ArchivosPorAnio;
