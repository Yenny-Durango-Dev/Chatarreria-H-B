import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#121513] text-white p-8 mt-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>

        {/* LOGO + MARCA */}
        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className='flex items-center gap-3'>
            <img
              src="/LogoChatarreriaH&B.png"
              alt="Chatarrería H&B"
              className="h-12 w-auto"
            />
            <span className="font-bold tracking-wide text-lg">
              Chatarrería H&B
            </span>
          </div>
          <p className='text-sm text-gray-400'>
            Transformamos chatarra en valor. Reciclaje con visión, tradición y futuro.
          </p>
        </div>

        {/* ENLACES RÁPIDOS */}
        <div>
          <h3 className='font-semibold text-[#B7570D] mb-3'>Navegación</h3>
          <ul className='flex flex-col gap-2'>
            {['inicio', 'servicios', 'materiales', 'precios', 'ubicación', 'galería', 'nosotros', 'blog', 'contacto']
              .map(item => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className='text-gray-300 hover:text-[#B7570D] transition-all'
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* CONTACTO RÁPIDO */}
        <div>
          <h3 className='font-semibold text-[#B7570D] mb-3'>Contacto</h3>
          <p className='text-sm text-gray-300'>📍 Bogotá, Colombia</p>
          <p className='text-sm text-gray-300'>📞 +57 300 000 0000</p>
          <p className='text-sm text-gray-300'>✉️ contacto@chatarreriahyb.com</p>
        </div>
      </div>

      <hr className='border-gray-700 my-6 max-w-6xl mx-auto' />

      <p className='text-sm text-gray-400 text-center'>
        © 2026 Chatarrería H&B. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
