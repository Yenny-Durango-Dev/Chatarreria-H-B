import React from "react";

const Precios = () => {
  return (
    <div id="precios">
      <section className="bg-gray-100 py-16" id="precios">
        <div className="max-w-6xl mx-auto px-4">

          {/* TÍTULO */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
              Nuestros Precios
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Pagamos lo justo por tu material. Transparencia total, nada de trampas,
              nada de letras chiquitas.
            </p>
          </div>

          {/* TABLA DE PRECIOS EN TARJETAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            {/* HIERRO */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-bold text-[#121513]">Hierro</h3>
              <p className="mt-2 text-gray-600">Desde</p>
              <p className="text-3xl font-bold text-[#B7570D] mt-2">$800/kg</p>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>Chatarra limpia</li>
                <li>Sin contaminantes</li>
                <li>Pago inmediato</li>
              </ul>
            </div>

            {/* COBRE */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-[#B7570D]">
              <h3 className="text-xl font-bold text-[#121513]">Cobre</h3>
              <p className="mt-2 text-gray-600">Desde</p>
              <p className="text-3xl font-bold text-[#B7570D] mt-2">$28.000/kg</p>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>Cobre limpio</li>
                <li>Sin recubrimientos</li>
                <li>Mejor precio del mercado</li>
              </ul>
            </div>

            {/* ALUMINIO */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-bold text-[#121513]">Aluminio</h3>
              <p className="mt-2 text-gray-600">Desde</p>
              <p className="text-3xl font-bold text-[#B7570D] mt-2">$4.500/kg</p>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>Latas y perfiles</li>
                <li>Material limpio</li>
                <li>Pesaje transparente</li>
              </ul>
            </div>

          </div>

          {/* NOTA IMPORTANTE */}
          <div className="mt-10 text-center bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700">
              Los precios pueden variar según el estado del material y el mercado.
              Escríbenos para cotización exacta.
            </p>
          </div>

          {/* BOTÓN FINAL */}
          <div className="text-center mt-8">
            <a
              href="#contacto"
              className="bg-[#121513] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Cotizar ahora
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Precios;
