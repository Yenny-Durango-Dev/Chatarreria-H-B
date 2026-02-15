import React from "react";

const Servicios = () => {
  return (
    <section className="bg-gray-100 py-16 scroll-mt-20" id="servicios">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* TÍTULO */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            En Chatarrería H&B convertimos lo que otros ven como desecho en valor real.
            Recogemos, clasificamos y reciclamos con responsabilidad y transparencia.
          </p>
        </div>

        {/* TARJETAS DE SERVICIO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {/* Servicio 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#B7570D] h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#121513]">
              Compra de chatarra
            </h3>
            <p className="mt-2 text-gray-700 flex-grow">
              Compramos metales ferrosos y no ferrosos: hierro, cobre, aluminio, acero y más,
              con pago justo y transparente.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#B7570D] h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#121513]">
              Recolección a domicilio
            </h3>
            <p className="mt-2 text-gray-700 flex-grow">
              Vamos hasta tu casa, empresa o bodega para recoger tu material sin complicaciones.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#B7570D] h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#121513]">
              Recibimos reciclaje
            </h3>
            <p className="mt-2 text-gray-700 flex-grow">
              Aceptamos materiales reciclables limpios y clasificados para su correcto procesamiento.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#B7570D] h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#121513]">
              Servicio de acarreos
            </h3>
            <p className="mt-2 text-gray-700 flex-grow">
              Transporte eficiente y seguro de chatarra, escombros y materiales.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Servicios;
