import React, { createContext, useState } from "react";
import axios from "axios";

export const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);

  const backendUrl = localStorage.getItem("backendUrl");

  const fetchProductos = async () => {
    try {
      const resp = await axios.get(`${backendUrl}?accion=getProductos`);
      setProductos(resp.data || []);
    } catch (err) {
      console.error("Error al traer productos:", err);
    }
  };

  const addProducto = async (nuevoProducto) => {
    try {
      const resp = await axios.post(backendUrl, {
        accion: "addProducto",
        ...nuevoProducto,
      });
      if (resp.data.status === "ok") {
        await fetchProductos(); // refrescamos lista global
      }
    } catch (err) {
      console.error("Error al agregar producto:", err);
    }
  };

  return (
    <ProductosContext.Provider value={{ productos, fetchProductos, addProducto }}>
      {children}
    </ProductosContext.Provider>
  );
}
