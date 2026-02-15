import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full bg-[#121513] shadow-md z-50">
            <nav className="max-w-6xl mx-auto px-4 md:px-6 py-2">

                <div className="flex justify-between items-center">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/LogoChatarreriaHB.png"
                            alt="Chatarrería H&B"
                            className="h-15 w-auto"
                        />
                        <span className="text-white font-bold tracking-wide text-lg md:text-xl">
                            Chatarrería H&B
                        </span>
                    </div>

                    {/* HAMBURGUESA */}
                    <button
                        className="md:hidden text-white text-2xl cursor-pointer focus:outline-none"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                    {/* MENÚ DESKTOP */}
                    <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-white font-semibold">
                        {['Inicio', 'Servicios', 'Materiales', 'Ubicacion']
                            .map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-[#B7570D] transition-all whitespace-nowrap"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}

                        <li>
                            <a
                                href="#contacto"
                                className="bg-[#B7570D] px-4 py-2 rounded-lg hover:bg-orange-700 transition-all"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                {/* MENÚ MÓVIL */}
                {open && (
                    <ul className="md:hidden flex flex-col gap-3 mt-4 text-white text-center border-t border-gray-700 pt-4">
                        {['Inicio', 'Servicios', 'Materiales', 'Ubicacion', 'Contacto']
                            .map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="block py-2 hover:text-[#B7570D]"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Navbar
