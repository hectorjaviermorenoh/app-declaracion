import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h1>Pantalla Principal - Productos</h1>
}

function Config() {
  return <h1>Configuración</h1>
}

function App() {
  return (
    <Container className="mt-4">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/config">Config</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </Container>
  )
}

export default App
