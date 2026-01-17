import React from "react";

const Ubicacion = () => {
  return (
    <div id="ubicacion">
      <section className="bg-white py-16" id="ubicacion">
        <div className="max-w-6xl mx-auto px-4">

          {/* TÍTULO */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
              Dónde encontrarnos
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              No estamos escondidos como metal en el patio del vecino.
              Estamos aquí, listos para recibir tu material y pagarte justo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">

            {/* INFO DE UBICACIÓN */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-[#121513]">
                Chatarrería H&B
              </h3>

              <p className="mt-3 text-gray-700">
                📍 Dirección:
                <span className="font-semibold">
                  Tu dirección aquí, Ciudad, Colombia
                </span>
              </p>

              <p className="mt-2 text-gray-700">
                ⏰ Horario:
                <span className="font-semibold">
                  Lunes a Sábado – 8:00 AM a 6:00 PM
                </span>
              </p>

              <p className="mt-2 text-gray-700">
                📞 Teléfono:
                <span className="font-semibold">+57 300 000 0000</span>
              </p>

              <p className="mt-2 text-gray-700">
                📧 Email:
                <span className="font-semibold">
                  contacto@chatarreriahb.com
                </span>
              </p>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#B7570D] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
              >
                Ver en Google Maps
              </a>
            </div>

            {/* MAPA (PLACEHOLDER BONITO POR AHORA) */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps?q=colombia&output=embed"
                className="w-full h-80 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Ubicacion;
