import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Materiales from './pages/Materiales'
import Precios from './pages/Precios'
import Ubicacion from './pages/Ubicacion'
import Galeria from './pages/Galeria'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

function App() {
  return (
    <main>
      <Navbar />
      <Inicio />
      <Servicios />
      <Materiales />
      <Precios />
      <Ubicacion />
      <Galeria />
      <Nosotros />
      <Blog />
      <Contacto />
      <Footer />
    </main>
  )
}

export default App