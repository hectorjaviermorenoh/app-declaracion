import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import AppNavbar from './components/Navbar/Navbar'
import Productos from "./pages/Productos/Productos";
import DatosTributarios from "./pages/DatosTributarios/DatosTributarios";
import ArchivosPorAnio from "./pages/ArchivosPorAnio/ArchivosPorAnio";
import { DashboardAdmin } from "./pages/DashboardAdmin/DashboardAdmin";


function App() {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/datos-tributarios" element={<DatosTributarios />} />
          <Route path="/registros" element={<ArchivosPorAnio />} />
          <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
