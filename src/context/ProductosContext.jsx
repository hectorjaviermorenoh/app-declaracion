import React, { createContext, useContext, useState, useCallback } from "react";
import { useBackendUrl } from "../hooks/useBackendUrl";

const ProductosContext = createContext(null);

const AUTH_REEMPLAZO_EMAIL =
  import.meta.env.VITE_AUTH_REEMPLAZO_EMAIL || "hectorjaviermorenoh@gmail.com";

const anioAnterior = new Date().getFullYear() - 1;

export function ProductosProvider({ children }) {
  const { backendUrl } = useBackendUrl();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArchivosPorAnio = useCallback(async (anio) => {
    if (!backendUrl) return [];
    try {
      const resp = await fetch(`${backendUrl}?accion=getArchivosPorAnio&anio=${anio}`);
      const data = await resp.json();
      if (data && data.status === "ok") return data.archivos || [];
      return data.archivos || [];
    } catch (err) {
      console.error("❌ Error al obtener archivos por año:", err);
      return [];
    }
  }, [backendUrl]);

  const refreshProductos = useCallback(async () => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      // 1) productos
      const resp = await fetch(`${backendUrl}?accion=getProductos`);
      const data = await resp.json();
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

      setProductos(productosConEstado);
    } catch (e) {
      console.error("❌ Error refreshProductos:", e);
    } finally {
      setLoading(false);
    }
  }, [backendUrl, fetchArchivosPorAnio]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const subirArchivo = useCallback(async (productosId, anio, file) => {
    if (!backendUrl) return { ok: false, mensaje: "Configure URL del backend" };
    if (!file) return { ok: false, mensaje: "Seleccione un archivo" };

    setLoading(true);
    try {
      const base64 = await toBase64(file);
      const payload = {
        accion: "subirArchivo",
        anio,
        productosId,
        archivo: {
          nombre: file.name,
          base64,
          tipo: file.type,
        },
      };

      const resp = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();

      if (data.status === "ok") {
        await refreshProductos();
        return { ok: true, mensaje: "Archivo subido correctamente", data };
      }
      return { ok: false, mensaje: data.mensaje || "Error al subir archivo", data };
    } catch (e) {
      console.error("❌ subirArchivo:", e);
      return { ok: false, mensaje: "Error al subir archivo" };
    } finally {
      setLoading(false);
    }
  }, [backendUrl, refreshProductos]);

  const replaceArchivo = useCallback(async (productoId, anio, file, replaceOnlyThis = false) => {
    if (!backendUrl) return { ok: false, mensaje: "Configure URL del backend" };
    if (!file) return { ok: false, mensaje: "Seleccione un archivo para reemplazar" };

    setLoading(true);
    try {
      const base64 = await toBase64(file);
      const payload = {
        accion: "replaceArchivo",
        productoId,
        anio: String(anio),
        correo: AUTH_REEMPLAZO_EMAIL,
        replaceOnlyThis,
        archivo: {
          nombre: file.name,
          base64,
          tipo: file.type,
        },
      };

      const resp = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();

      if (data.status === "ok" || data.success === true) {
        await refreshProductos();
        return { ok: true, mensaje: "Archivo reemplazado correctamente", data };
      }
      return { ok: false, mensaje: data.mensaje || "Error al reemplazar", data };
    } catch (e) {
      console.error("❌ replaceArchivo:", e);
      return { ok: false, mensaje: "Error al reemplazar archivo" };
    } finally {
      setLoading(false);
    }
  }, [backendUrl, refreshProductos]);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        loading,
        anioAnterior,
        refreshProductos,
        subirArchivo,
        replaceArchivo,
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
