import { createContext, useContext, useState, useCallback } from "react";
import { apiGet, apiPost } from "../utils/apiClient.js";


const FacturasContext = createContext();

export function FacturasProvider({ children }) {

  const [loading, setLoading] = useState(false);

  const fetchFacturasPorAnio = useCallback(async (anio) => {
    setLoading(true);
    try {
      const data = await apiGet("obtenerFacturasPorAnio", { anio });
      if (data && data.status === "ok") return data.data || [];
      return data.data || [];
    } catch (e) {
      console.error("❌ Error al obtener facturas por año:", e.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);


  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const subirFactura = useCallback(
    async ({ anio, entidad, descripcion, valor, metodoPago, file }) => {
      if (!file) {
        return { ok: false, mensaje: "Debe seleccionar un archivo context linea 36" };
      }

      setLoading(true);
      try {
        // Convertir archivo a Base64 igual que subirArchivo
        const base64 = await toBase64(file);

        const payload = {
          anio,
          entidad,
          descripcion,
          valor,
          metodoPago,
          archivo: {
            nombre: file.name,
            base64,
            tipo: file.type,
          },
        };

        const data = await apiPost("subirArchivoFacturas", payload);

        if (data.status === "ok") {
          return {
            ok: true,
            mensaje: data.message || "Factura subida correctamente",
            data,
          };
        }

        // Caso: validación o error del servidor
        return {
          ok: false,
          mensaje: data.message || "Error al subir la factura",
          data,
        };
      } catch (e) {
        console.error("❌ subirFactura:", e.message);
        return { ok: false, mensaje: "Error al subir la factura" };
      } finally {
        setLoading(false);
      }
    },
    []
  );


  const updateFactura = useCallback(async (facturaEditada) => {
    setLoading(true);
    try {
      const data = await apiPost("actualizarFactura", facturaEditada);

      if (data.status === "ok") {
        return {
          ok: true,
          mensaje: data.mensaje || "Factura actualizada correctamente",
          datos: data.datos,
        };
      }

      return { ok: false, mensaje: data.mensaje || "No se pudo actualizar la factura" };
    } catch (e) {
      console.error("❌ actualizarFactura:", e.message);
      return { ok: false, mensaje: "Error al actualizar la factura" };
    } finally {
      setLoading(false);
    }
  }, []);


  const deleteFactura = useCallback(async (registroId) => {
    setLoading(true);
    try {
      const data = await apiPost("eliminarFactura", { registroId });

      if (data.status === "ok") {
        return {
          ok: true,
          mensaje: data.mensaje || "Factura eliminada correctamente",
          datos: data.datos,
        };
      }

      return { ok: false, mensaje: data.mensaje || "Error al eliminar la factura" };
    } catch (e) {
      console.error("❌ eliminarFactura:", e.message);
      return { ok: false, mensaje: "Error al eliminar la factura" };
    } finally {
      setLoading(false);
    }
  }, []);


  return (
    // <FacturasContext.Provider value={{ loading, fetchFacturasPorAnio, subirFactura }}>
    <FacturasContext.Provider value={{ loading, fetchFacturasPorAnio, subirFactura, updateFactura, deleteFactura}}>
      {children}
    </FacturasContext.Provider>
  );
}

export function useFacturas() {
  return useContext(FacturasContext);
}
