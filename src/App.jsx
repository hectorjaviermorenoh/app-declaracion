import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import AppNavbar from './components/Navbar/Navbar'


import Productos from "./pages/Productos/Productos";
import DatosTributarios from "./pages/DatosTributarios/DatosTributarios";
import ArchivosPorAnio from "./pages/ArchivosPorAnio/ArchivosPorAnio";


function Config() {
  return (
    <>
    <h1>Configuración</h1>
    <h2>prueba de javier</h2>
    </>
  )
}

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/config" element={<Config />} />
          <Route path="/datos-tributarios" element={<DatosTributarios />} />
          <Route path="/registros" element={<ArchivosPorAnio />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
