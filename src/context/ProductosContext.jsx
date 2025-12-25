import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useToast } from "../context/ToastContext";
import { apiGet, apiPost, getAuthToken } from "../utils/apiClient.js";

const ProductosContext = createContext(null);

const anioAnterior = new Date().getFullYear() - 1;

export function ProductosProvider({ children }) {
  const { showToast } = useToast();

  // const [productos, setProductos] = useState([]);
  const [registroProductos, setRegistroProductos] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(false);

  const fetchArchivosPorAnio = useCallback(async (anio) => {
    setLoadingProductos(true);
    try {
      const data = await apiGet("getArchivosPorAnio", { anio });
      if (data && data.status === "ok") return data.archivos || [];
      return data.archivos || [];
    } catch (e) {
      console.error("❌ Error al obtener archivos por año:", e.message);
      return [];
    } finally {
      setLoadingProductos(false);
    }
  }, []);

  const getProductos = useCallback(async () => {
    setLoadingProductos(true);
    try {
      const data = await apiGet("getProductos");

      if (data && data.status === "ok") {
        return data.data || []
      }

    } catch (e) {
      console.error("❌ Error al obtener productos", e.message);
      return [];
    } finally {
      setLoadingProductos(false);
    }
  }, []);

  const refreshProductos = useCallback(async () => {
    setLoadingProductos(true);
    try {
      const data = await apiGet("getProductos");
      const productosRaw = data.data || [];

      const archivos = await fetchArchivosPorAnio(String(anioAnterior));

      const productosConEstado = productosRaw.map((p) => {
        const a =
          archivos.find(
            (x) =>
              String(x.productoId) === String(p.id) &&
              String(x.anio) === String(anioAnterior)
          ) || null;

        return {
          ...p,
          tieneArchivo: !!a,
          archivoInfo: a,
        };
      });

      const productosOrdenados = productosConEstado.sort((a, b) => {
        if (!a.tieneArchivo && b.tieneArchivo) return -1;
        if (a.tieneArchivo && !b.tieneArchivo) return 1;
        return 0;
      });

      setRegistroProductos(productosOrdenados);
    } catch (e) {
      console.error("❌ Error refreshProductos:", e.message);
    } finally {
      setLoadingProductos(false);
    }
  }, [fetchArchivosPorAnio]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const addProducto = useCallback(
    async ({ nombre, descripcion, entidad, tipo }) => {
      setLoadingProductos(true);
      try {
        const data = await apiPost("addProducto", {
          nombre,
          descripcion,
          entidad,
          tipo,
        });

        if (data.status === "ok") {
          await refreshProductos();
          return { ok: true, mensaje: "✅ Producto agregado con éxito", data };
        }

        return {
          ok: false,
          mensaje: data.mensaje || "Error al agregar producto",
          data,
        };
      } catch (e) {
        console.error("❌ addProducto:", e.message);
        return { ok: false, mensaje: "Error al agregar producto" };
      } finally {
        setLoadingProductos(false);
      }
    },
    [refreshProductos]
  );

  const deleteProducto = useCallback(
    async (productoId) => {
      setLoadingProductos(true);
      try {
        const data = await apiPost("deleteProducto", { id: productoId });

        if (data.status === "ok") {
          showToast("✅ Producto eliminado correctamente", "success", 3000, "Productos");
          await refreshProductos();
        } else {
          showToast(
            `❌ Error al eliminar: ${data.mensaje || "sin detalle"}`,
            "error",
            3000,
            "Productos"
          );
        }

        return {
          ok: false,
          mensaje: data.mensaje || "❌ Error al eliminar producto",
          data,
        };
      } catch (e) {
        showToast("❌ Error eliminando producto", "error", 3000, "Productos");
        console.error("❌ deleteProducto:", e.message);
        return { ok: false, mensaje: "❌ Error al eliminar producto" };
      } finally {
        setLoadingProductos(false);
      }
    },
    [refreshProductos, showToast]
  );

  const subirArchivo = useCallback(
    async (productosId, anio, file, usarExistente = false, nombreProducto = "") => {
      if (!file) return { ok: false, mensaje: "Seleccione un archivo" };

      setLoadingProductos(true);
      try {
        const base64 = await toBase64(file);
        const payload = {
          anio,
          productosId,
          usarExistente,
          nombreProducto,
          archivo: {
            nombre: file.name,
            base64,
            tipo: file.type,
          },
        };

        const data = await apiPost("subirArchivo", payload);

        if (data.status === "ok") {
          await refreshProductos();
          return { ok: true, mensaje: "Archivo subido correctamente", data };
        }

        if (data.status === "exists") {
          return {
            ok: false,
            existe: true,
            mensaje:
              data.message ||
              "⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",
            data,
          };
        }

        return {
          ok: false,
          mensaje: data.mensaje || "Error al subir archivo",
          data,
        };
      } catch (e) {
        console.error("❌ subirArchivo:", e.message);
        return { ok: false, mensaje: "Error al subir archivo" };
      } finally {
        setLoadingProductos(false);
      }
    },
    [refreshProductos]
  );

  const replaceArchivo = useCallback(
    async (productoId, anio, file, replaceOnlyThis = false, nombreProducto = "") => {
      if (!file) return { ok: false, mensaje: "Seleccione un archivo para reemplazar" };

      setLoadingProductos(true);
      try {
        const base64 = await toBase64(file);

        const payload = {
          productoId,
          anio: String(anio),
           replaceOnlyThis,
          nombreProducto,
          archivo: {
            nombre: file.name,
            base64,
            tipo: file.type,
          },
        };

        const data = await apiPost("replaceArchivo", payload);

        if (data.status === "ok" || data.success === true) {
          await refreshProductos();
          return { ok: true, mensaje: "Archivo reemplazado correctamente", data };
        }

        return { ok: false, mensaje: data.mensaje || "Error al reemplazar", data };
      } catch (e) {
        console.error("❌ replaceArchivo:", e.message);
        return { ok: false, mensaje: "Error al reemplazar archivo" };
      } finally {
        setLoadingProductos(false);
      }
    },
    [refreshProductos]
  );

  useEffect(() => {
    const token = getAuthToken();
    if (!token) return;

    refreshProductos();
  }, [refreshProductos]);

  const deleteRegistroProducto = useCallback(
    async (registroId) => {

      setLoadingProductos(true);

      try {
        const data = await apiPost("deleteRegistroProducto", {id: registroId,});

        if (data?.status === "ok") {
          const { eliminado } = data;
          showToast(`✅ ${data.mensaje}`, "success", 3000, "ProductoContext");
          return {
            ok: true,
            eliminado,
          };
        }

        showToast(`❌ ${data?.mensaje || "No se pudo eliminar el registro"}`,"error",3000,"ProductoContext");

        return { ok: false };

      } catch (e) {
        console.error(e);
        showToast("❌ Error eliminando registro","error",3000,"ProductoContext");
        return { ok: false };

      } finally {
        setLoadingProductos(false);
      }
    },
    [showToast]
  );



  return (
    <ProductosContext.Provider
      value={{
        registroProductos,
        getProductos,
        refreshProductos,
        anioAnterior,
        subirArchivo,
        replaceArchivo,
        fetchArchivosPorAnio,
        addProducto,
        deleteProducto,
        deleteRegistroProducto,
        loading: loadingProductos, // ← YA FUNCIONA
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {
  const ctx = useContext(ProductosContext);
  if (!ctx) throw new Error("useProductos debe usarse dentro de <ProductosProvider>");
  return ctx;
}
