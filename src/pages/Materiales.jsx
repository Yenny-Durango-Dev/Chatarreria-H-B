import React from "react";
import MaterialesChatarra1 from '../assets/materiales-chatarra1.jpg'
import MaterialesChatarra2 from '../assets/materiales-chatarra2.webp'
import MaterialesChatarra3 from '../assets/materiales-chatarra3.jpg'
import MaterialesChatarra4 from '../assets/materiales-chatarra4.jpg'
import MaterialesChatarra5 from '../assets/materiales-chatarra5.jpg'
import MaterialesChatarra6 from '../assets/materiales-chatarra6.jpg'

const Materiales = () => {
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

                        {/* TARJETA 1 */}
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={MaterialesChatarra1}
                                alt="Hierro reciclado"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#121513]">Hierro</h3>
                                <p className="mt-2 text-gray-700">
                                    Compra y reciclaje de hierro industrial, doméstico y chatarra pesada.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 2 */}
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={MaterialesChatarra2}
                                alt="Cobre reciclado"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#121513]">Cobre</h3>
                                <p className="mt-2 text-gray-700">
                                    Pagamos excelentes precios por cables y piezas de cobre limpio.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 3 */}
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={MaterialesChatarra3}
                                alt="Aluminio reciclado"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#121513]">Aluminio</h3>
                                <p className="mt-2 text-gray-700">
                                    Latas, perfiles y piezas de aluminio listas para reciclaje responsable.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 4 */}
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={MaterialesChatarra4}
                                alt="Acero reciclado"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#121513]">Acero</h3>
                                <p className="mt-2 text-gray-700">
                                    Recibimos estructuras y residuos de acero para reutilización.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 5 */}
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={MaterialesChatarra5}
                                alt="Baterías usadas"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#121513]">Baterías</h3>
                                <p className="mt-2 text-gray-700">
                                    Manejo responsable y reciclaje seguro de baterías usadas.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 6 */}
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={MaterialesChatarra6}
                                alt="Chatarra electrónica"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#121513]">
                                    Chatarra electrónica
                                </h3>
                                <p className="mt-2 text-gray-700">
                                    Computadores, cables y dispositivos para reciclaje tecnológico.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* BOTÓN FINAL */}
                    <div className="text-center mt-10">
                        <a
                            href="#contacto"
                            className="bg-[#B7570D] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90"
                        >
                            Pregunta por tu material
                        </a>
                    </div>

                </div>
            </section>
    );
};

export default Materiales;
