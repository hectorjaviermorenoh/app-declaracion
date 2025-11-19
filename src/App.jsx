import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AppNavbar from './components/Navbar/Navbar'
import Productos from "./pages/Productos/Productos";
import DatosTributarios from "./pages/DatosTributarios/DatosTributarios";
import Contador from "./pages/Contador/Contador";
import { DashboardAdmin } from "./pages/DashboardAdmin/DashboardAdmin";



function App() {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/datos-tributarios" element={<DatosTributarios />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
