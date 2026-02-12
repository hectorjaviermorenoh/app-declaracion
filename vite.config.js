import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa"; // 1. Importa el plugin

export default defineConfig({
  base: "/app-declaracion/",
  plugins: [
    react(),
    // 2. Configura el plugin
    VitePWA({
      registerType: 'autoUpdate', // Actualiza la app automáticamente cuando hay cambios
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      filename: 'sw.js',
      manifest: {
        name: "App Declaración",
        short_name: "Declaración",
        description: "Administración archivos declaracion y facturas",
        start_url: "/app-declaracion/#/",
        scope: "/app-declaracion/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0d6efd",
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Esto es lo que soluciona tu problema de renderizado:
        // Cachea todos los archivos generados por el build (JS, CSS, HTML)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff2}'],
        importScripts: [],
        cleanupOutdatedCaches: true
      },
    })
  ],
    server: {
    historyApiFallback: true,
    port: 5174,
  },
});