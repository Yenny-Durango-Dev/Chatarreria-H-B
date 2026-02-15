import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Materiales from './pages/Materiales'
import Ubicacion from './pages/Ubicacion'
import Contacto from './pages/Contacto'

function App() {
  return (
    <main>
      <Navbar />
      <Inicio />
      <Servicios />
      <Materiales />
      <Ubicacion />
      <Contacto />
      <Footer />
    </main>
  )
}

export default App