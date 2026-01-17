import React from 'react'
import InicioChatarra1 from '../assets/inicio-chatarra1.png'
import InicioChatarra2 from '../assets/inicio-chatarra2.png'

const Inicio = () => {
    return (
       <div id="inicio">
         <section className="bg-gray-100">

            {/* HERO PRINCIPAL */}
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-8">

                {/* TEXTO */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#121513]">
                        Chatarrería H&B
                    </h1>

                    <p className="mt-4 text-lg text-gray-700">
                        Compramos, reciclamos y transformamos chatarra para darle una
                        segunda vida a los materiales y cuidar el planeta.
                        Pagamos justo, trabajamos con transparencia y hacemos que tu
                        desperdicio valga dinero.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <a
                            href="#servicios"
                            className="bg-[#B7570D] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
                        >
                            Ver servicios
                        </a>

                        <a
                            href="#contacto"
                            className="border border-[#121513] text-[#121513] px-6 py-3 rounded-lg font-semibold"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>

                {/* IMAGEN PRINCIPAL */}
                <div>
                    <img
                        src={InicioChatarra1}
                        alt="Chatarrería H&B"
                        className="rounded-xl shadow-lg w-full h-auto"
                    />
                </div>

            </div>

            {/* SECCIÓN DE CONFIANZA */}
            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <h2 className="text-3xl font-bold text-[#121513]">
                        ¿Por qué elegirnos?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">

                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-xl">Pago justo</h3>
                            <p className="mt-2 text-gray-700">
                                Valoramos tu material y pagamos precios competitivos.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-xl">Reciclaje responsable</h3>
                            <p className="mt-2 text-gray-700">
                                Reducimos el impacto ambiental y cuidamos el planeta.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-xl">Servicio confiable</h3>
                            <p className="mt-2 text-gray-700">
                                Atención clara, rápida y sin letras chiquitas.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* IMAGEN SECUNDARIA */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <img
                    src={InicioChatarra2}
                    alt="Proceso de reciclaje"
                    className="rounded-xl shadow-lg w-full"
                />
            </div>

        </section>
       </div>
    )
}

export default Inicio
