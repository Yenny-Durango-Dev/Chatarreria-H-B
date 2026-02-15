import React from 'react'
import InicioChatarra1 from '../assets/inicio-chatarra1.png'
import InicioChatarra2 from '../assets/inicio-chatarra2.jpg'

const Inicio = () => {

    const linkCotizar = "https://wa.me/573016905896?text=Hola,%20quiero%20cotizar%20chatarra."
    const linkAcarreo = "https://wa.me/573052982089?text=Hola,%20necesito%20un%20servicio%20de%20acarreo."

    return (
        <section className="bg-gray-100 scroll-mt-20 py-16" id='inicio'>
            {/* HERO COTIZACIÓN */}
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">

                {/* TEXTO */}
                <div className="order-2 md:order-1">

                    <h1 className="text-4xl md:text-5xl font-bold text-[#121513]">
                        Chatarrería H&B
                    </h1>

                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#121513] leading-tight py-6">
                        Cotización de chatarrería y confiable
                    </h2>

                    <p className="mt-4 text-lg text-gray-700">
                        Transformamos tu chatarra en dinero. Cotiza tu material en segundos y recibe
                        una oferta justa. Proceso rápido, transparente y sin complicaciones.
                    </p>

                    <div className="mt-6 space-y-5">

                        <p className="text-gray-700 font-semibold">
                            Cotiza tu chatarra por WhatsApp:
                        </p>


                        {/* BOTONES */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            {/* NUMERO VENTAS */}
                            <a
                                href={linkCotizar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#B7570D] text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition flex-1"
                            >
                                Cotizar Ventas
                                <span className="block text-sm font-normal opacity-90">
                                    301 690 5896
                                </span>
                            </a>


                            {/* NUMERO ACARREOS TAMBIEN COTIZA */}
                            <a
                                href={linkAcarreo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#121513] text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition flex-1"
                            >
                                Cotizar Ventas
                                <span className="block text-sm font-normal opacity-90">
                                    305 298 2089
                                </span>
                            </a>

                        </div>


                        {/* VER SERVICIOS */}
                        <div>
                            <a
                                href="#servicios"
                                className="border border-[#121513] text-[#121513] px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-200 transition"
                            >
                                Ver todos los servicios
                            </a>
                        </div>

                    </div>

                </div>


                {/* IMAGEN */}
                <div className="order-1 md:order-2">
                    <img
                        src={InicioChatarra1}
                        alt="Cotización de chatarra"
                        className="rounded-xl shadow-lg w-full h-auto"
                    />
                </div>

            </div>



            {/* HERO ACARREOS */}
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">

                {/* IMAGEN */}
                <div>
                    <img
                        src={InicioChatarra2}
                        alt="Servicio de acarreos"
                        className="rounded-xl shadow-lg w-full h-auto"
                    />
                </div>


                {/* TEXTO */}
                <div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#121513] leading-tight">
                        Tambien hacemos acarreo sin complicaciones
                    </h2>

                    <p className="mt-4 text-lg text-gray-700">
                        Recogemos tu chatarra directamente en tu ubicación. Nuestro servicio
                        es rápido, seguro y confiable. Nos encargamos de todo el proceso.
                    </p>
                    <div className="mt-6">

                        <a
                            href={linkAcarreo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B7570D] text-white px-6 py-3 rounded-lg font-semibold inline-block hover:opacity-90 transition"
                        >
                            Solicitar acarreo
                            <span className="block text-sm font-normal opacity-90">
                                305 298 2089
                            </span>
                        </a>

                    </div>


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
                                Pagamos precios competitivos y transparentes.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-xl">Reciclaje responsable</h3>
                            <p className="mt-2 text-gray-700">
                                Contribuimos al cuidado del medio ambiente.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-xl">Servicio confiable</h3>
                            <p className="mt-2 text-gray-700">
                                Atención rápida, clara y profesional.
                            </p>
                        </div>

                    </div>

                </div>

            </div>



            {/* IMAGEN FINAL */}
            <div className="max-w-6xl mx-auto px-4 py-12">

                <img
                    src={InicioChatarra2}
                    alt="Proceso de reciclaje"
                    className="rounded-xl shadow-lg w-full"
                />

            </div>


        </section>
    )
}

export default Inicio
