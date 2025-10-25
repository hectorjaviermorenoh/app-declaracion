import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useToast } from "../context/ToastContext";
import { useBackends } from "../context/BackendsContext";
import { apiGet, apiPost } from "../utils/apiClient.js";



const ProductosContext = createContext(null);

const AUTH_REEMPLAZO_EMAIL =
import.meta.env.VITE_AUTH_REEMPLAZO_EMAIL || "hectorjaviermorenoh@gmail.com";

const anioAnterior = new Date().getFullYear() - 1;

export function ProductosProvider({ children }) {

  const { activeBackend, loading } = useBackends(); // 👈 obtenemos backend activo
  const { showToast } = useToast();
  const backendUrl = activeBackend?.url || null;
  const [productos, setProductos] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(false);

  const fetchArchivosPorAnio = useCallback(async (anio) => {
    if (!backendUrl) return [];
    try {
      const data = await apiGet(backendUrl, "getArchivosPorAnio", { anio }); // url, accion y año
      if (data && data.status === "ok") return data.archivos || [];
      return data.archivos || [];
    } catch (e) {
      console.error("❌ Error al obtener archivos por año:", e.message);
      return [];
    }
  }, [backendUrl]);

  const refreshProductos = useCallback(async () => {
    if (!backendUrl) return;
    setLoadingProductos(true);
    try {
      // 1) productos
      const data = await apiGet(backendUrl, "getProductos");
      const productosRaw = data.data || [];

      // 2) archivos de anioAnterior
      const archivos = await fetchArchivosPorAnio(String(anioAnterior));

      // 3) merge estado
      const productosConEstado = productosRaw.map((p) => {
        const a = archivos.find(
          (x) => String(x.productoId) === String(p.id) && String(x.anio) === String(anioAnterior)
        ) || null;
        return {
          ...p,
          tieneArchivo: !!a,
          archivoInfo: a,
        };
      });

      // 4) ordenar: primero los que NO tienen archivo
      const productosOrdenados = productosConEstado.sort((a, b) => {
        if (a.tieneArchivo === false && b.tieneArchivo === true) return -1;
        if (a.tieneArchivo === true && b.tieneArchivo === false) return 1;
        return 0;
      });

      setProductos(productosOrdenados);
    } catch (e) {
      console.error("❌ Error refreshProductos:", e.message);
    } finally {
      setLoadingProductos(false);
    }
  }, [backendUrl, fetchArchivosPorAnio]);

  useEffect(() => {
    // 👇 Esperar a que BackendsContext termine de cargar
    if (!loading && backendUrl) {
      refreshProductos();
    }
  }, [loading, backendUrl, refreshProductos]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const addProducto = useCallback(async ({ nombre, descripcion, entidad, tipo }) => {
    if (!backendUrl) return { ok: false, mensaje: "Configure URL del backend" };

    setLoadingProductos(true);
    try {
      const data = await apiPost(
        backendUrl,
        "addProducto",
        { nombre, descripcion, entidad, tipo },
      );

      if (data.status === "ok") {
        await refreshProductos();
        return { ok: true, mensaje: "✅ Producto agregado con éxito", data };
      }

      return { ok: false, mensaje: data.mensaje || "Error al agregar producto", data };
    } catch (e) {
      console.error("❌ addProducto:", e.message);
      return { ok: false, mensaje: "Error al agregar producto" };
    } finally {
      setLoadingProductos(false);
    }
  }, [backendUrl, refreshProductos]);

  const deleteProducto = useCallback(async (productoId) => {
    if (!backendUrl) return { ok: false, mensaje: "⚠️ Configure URL del backend" };

    setLoadingProductos(true);
    try {
      const data = await apiPost(backendUrl, "deleteProducto", { id: productoId });

      // if (data.status === "ok") {
      //   await refreshProductos();
      //   return { ok: true, mensaje: "✅ Producto eliminado correctamente", data };
      // }

      if (data.status === "ok") {
        showToast("✅ Producto eliminado correctamente", "success", 3000, "Productos");
        await refreshProductos();   // 👈 refrescar productos
      } else {
        showToast(`❌ Error al eliminar: ${(data.mensaje || "sin detalle")}`, "success", 3000, "Productos");
      }

      return { ok: false, mensaje: data.mensaje || "❌ Error al eliminar producto", data };
    } catch (e) {
      showToast("❌ Error eliminando producto", "success", 3000, "Productos");
      console.error("❌ deleteProducto:", e.message);
      return { ok: false, mensaje: "❌ Error al eliminar producto" };
    } finally {
      setLoadingProductos(false);
    }
  }, [backendUrl, refreshProductos, showToast]);


  const subirArchivo = useCallback(async (productosId, anio, file, usarExistente = false, nombreProducto = "") => {
    if (!backendUrl) return { ok: false, mensaje: "Configure URL del backend" };
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

      const data = await apiPost(backendUrl, "subirArchivo", payload);

      if (data.status === "ok") {
        await refreshProductos();
        return { ok: true, mensaje: "Archivo subido correctamente", data };
      }

      if (data.status === "exists") {
        return {
          ok: false,
          existe: true, // 👈 NUEVO: para que el frontend muestre confirmación
          mensaje: data.message || "⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",
          data,
        };
      }

      return { ok: false, mensaje: data.mensaje || "Error al subir archivo", data };
    } catch (e) {
      console.error("❌ subirArchivo:", e.message);
      return { ok: false, mensaje: "Error al subir archivo" };
    } finally {
      setLoadingProductos(false);
    }
  }, [backendUrl, refreshProductos]);

  const replaceArchivo = useCallback(async (productoId, anio, file, replaceOnlyThis = false, nombreProducto = "") => {
    if (!backendUrl) return { ok: false, mensaje: "Configure URL del backend" };
    if (!file) return { ok: false, mensaje: "Seleccione un archivo para reemplazar" };

    setLoadingProductos(true);
    try {
      const base64 = await toBase64(file);
      const payload = {
        productoId,
        anio: String(anio),
        correo: AUTH_REEMPLAZO_EMAIL,
        replaceOnlyThis,
        nombreProducto,
        archivo: {
          nombre: file.name,
          base64,
          tipo: file.type,
        },
      };

      const data = await apiPost(backendUrl, "replaceArchivo", payload);

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
  }, [backendUrl, refreshProductos]);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        refreshProductos,
        anioAnterior,
        subirArchivo,
        replaceArchivo,
        fetchArchivosPorAnio,
        addProducto,
        deleteProducto,
        loading: loading || loadingProductos
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
