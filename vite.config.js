import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/app-declaracion/", // 👈 esto ya lo tienes para GitHub Pages
  server: {
    historyApiFallback: true, // 👈 clave para que no rompa al recargar en rutas
    port: 5174,
  },
});
