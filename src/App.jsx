import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import AppNavbar from './components/Navbar/Navbar'

import AddProducto from "./pages/AddProducto";
import Productos from "./pages/Productos/Productos";


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
          <Route path="/productos/add" element={<AddProducto />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
