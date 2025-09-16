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

  const cargarArchivos = async (anioSeleccionado) => {
    setLoading(true);
    try {
      const data = await fetchArchivosPorAnio(anioSeleccionado);
      setArchivos(data);
    } catch (e) {
      showToast(`❌ Error cargando archivos ${e}`, "danger");
    } finally {
      setLoading(false);
    }
  };

  // ✅ cargar solo una vez al inicio y cada vez que cambia el año
  useEffect(() => {
    cargarArchivos(anio);
  }, [anio]);

  const getFileIcon = (filename) => {
    if (!filename) return "📄";

    const ext = filename.split(".").pop().toLowerCase();

    switch (ext) {
      case "pdf":
        return "📕"; // rojo para PDF
      case "doc":
      case "docx":
        return "📝"; // documento Word
      case "xls":
      case "xlsx":
        return "📊"; // Excel
      case "ppt":
      case "pptx":
        return "📽️"; // PowerPoint
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "🖼️"; // imagen
      case "txt":
        return "📃"; // texto plano
      case "zip":
      case "rar":
        return "🗜️"; // comprimido
      default:
        return "📄"; // genérico
    }
  };


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
      ) : archivos.length === 0 ? (
        <p>No hay archivos para este año.</p>
      ) : (
        <div className="table-responsive archivos-por-anio ">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th className="thicon"></th>
                <th>Entidad</th>
                <th>Nombre del producto</th>
                <th>Tipo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {archivos.map((a) => {
                return (
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
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ArchivosPorAnio;
