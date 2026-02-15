import React from "react";
import MaterialesChatarra1 from '../assets/materiales-chatarra1.jpg'
import MaterialesChatarra2 from '../assets/materiales-chatarra2.webp'
import MaterialesChatarra3 from '../assets/materiales-chatarra3.jpg'
import MaterialesChatarra4 from '../assets/materiales-chatarra4.jpg'
import MaterialesChatarra5 from '../assets/materiales-chatarra5.jpg'
import MaterialesChatarra6 from '../assets/materiales-chatarra6.jpg'
import MaterialesChatarra7 from '../assets/materiales-chatarra7.jpg'
import MaterialesChatarra8 from '../assets/materiales-chatarra8.jpeg'

const Materiales = () => {
    const linkCotizar = "https://wa.me/573016905896?text=Hola,%20quiero%20cotizar%20chatarra."
    const linkAcarreo = "https://wa.me/573052982089?text=Hola,%20necesito%20un%20servicio%20de%20acarreo."

    return (
        <section className="bg-white py-16 scroll-mt-20" id="materiales">
            <div className="max-w-6xl mx-auto px-4">

                {/* TÍTULO */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
                        Materiales que compramos
                    </h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Convertimos desperdicio en valor. Recibimos y reciclamos metales con
                        responsabilidad ambiental y pago justo.
                    </p>
                </div>

                {/* GRID DE MATERIALES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">

                    {/* TARJETA 1 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra1}
                            alt="Hierro reciclado"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">
                                Hierro</h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Compra y reciclaje de hierro industrial, doméstico y chatarra pesada.
                            </p>
                        </div>
                    </div>

                    {/* TARJETA 2 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra2}
                            alt="Cobre reciclado"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">
                                Cobre</h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Pagamos excelentes precios por cables y piezas de cobre limpio.
                            </p>
                        </div>
                    </div>

                    {/* TARJETA 3 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra3}
                            alt="Aluminio reciclado"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">
                                Aluminio</h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Latas, perfiles y piezas de aluminio listas para reciclaje responsable.
                            </p>
                        </div>
                    </div>

                    {/* TARJETA 4 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra4}
                            alt="Acero reciclado"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">
                                Acero</h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Recibimos estructuras y residuos de acero para reutilización.
                            </p>
                        </div>
                    </div>

                    {/* TARJETA 5 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra5}
                            alt="Baterías usadas"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">
                                Baterías</h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Manejo responsable y reciclaje seguro de baterías usadas.
                            </p>
                        </div>
                    </div>

                    {/* TARJETA 6 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra6}
                            alt="Chatarra electrónica"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">

                                Chatarra electrónica
                            </h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Computadores, cables y dispositivos para reciclaje tecnológico.
                            </p>
                        </div>
                    </div>
                    {/* TARJETA 6 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra7}
                            alt="Materiales de construcción reciclados"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">

                                Materiales de construcción
                            </h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Madera, ladrillos, concreto y otros materiales de construcción para reciclaje.
                            </p>
                        </div>
                    </div>
                    {/* TARJETA 7 */}
                    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
                        <img
                            src={MaterialesChatarra8}
                            alt="Materiales de desecho"
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#121513]">

                                Materiales de desecho
                            </h3>
                            <p className="mt-2 text-gray-700 text-sm md:text-base flex-grow">
                                Materiales que no son reciclables, pero que pueden ser procesados de forma segura.
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTÓN FINAL */}
                <div className="flex flex-col sm:flex-row gap-4 py-10 justify-center">

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

            </div>
        </section>
    );
};

export default Materiales;
