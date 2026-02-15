import React from "react";

const Ubicacion = () => {

  const whatsappAcarreos = "https://wa.me/573052982089?text=Hola,%20necesito%20información.";
  const whatsappCotizar = "https://wa.me/573016905896?text=Hola,%20quiero%20cotizar%20chatarra.";
  const telefonoAcarreos = "tel:+573052982089";
  const telefonoCotizar = "tel:+573016905896";
  const email = "mailto:chatarreriahyb@gmail.com";
  const mapsLink = "https://maps.app.goo.gl/sJ8KvSBamxfEM5CK9";

  return (
    <section className="bg-white py-16 scroll-mt-20" id="ubicacion">

      <div className="max-w-6xl mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
            Dónde encontrarnos
          </h2>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Estamos en Medellín, listos para recibir tu material o atender tu solicitud.
          </p>
        </div>


        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-stretch">

          {/* INFO */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm flex flex-col justify-between">

            <div>

              <h3 className="text-xl md:text-2xl font-bold text-[#121513]">
                Chatarrería H&B
              </h3>


              {/* DIRECCIÓN */}
              <p className="mt-4 text-gray-700">
                📍 Dirección:
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold ml-1 hover:text-[#B7570D] transition"
                >
                  Cl. 57 #48-8, La Candelaria, Medellín
                </a>
              </p>


              {/* HORARIO */}
              <p className="mt-3 text-gray-700">
                ⏰ Horario:
                <span className="font-semibold ml-1">
                  24/7 - Siempre disponibles
                </span>
              </p>


              {/* TELÉFONO ACARREOS */}
              <p className="mt-3 text-gray-700">
                📞 Acarreos y Compra de chatarra:
                <a
                  href={whatsappAcarreos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold ml-1 hover:text-[#B7570D] transition"
                >
                  +57 305 298 2089 (WhatsApp)
                </a>
              </p>


              {/* TELÉFONO COTIZAR */}
              <p className="mt-3 text-gray-700">
                📞 Compra de chatarra:
                <a
                  href={whatsappCotizar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold ml-1 hover:text-[#B7570D] transition"
                >
                  +57 301 690 5896 (WhatsApp)
                </a>
              </p>


              {/* EMAIL */}
              <p className="mt-3 text-gray-700">
                📧 Email:
                <a
                  href={email}
                  className="font-semibold ml-1 hover:text-[#B7570D] transition"
                >
                  chatarreriahyb@gmail.com
                </a>
              </p>

            </div>


            {/* BOTONES */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B7570D] text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition"
              >
                Ver ubicación
              </a>
            </div>

          </div>



          {/* MAPA */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-full min-h-[300px]">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.803598377019!2d-75.5633448!3d6.254435399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429001ebfb559%3A0xe4cd5bd438b0611b!2sLa%20paz%20con%20ecuador!5e0!3m2!1ses!2sco!4v1771190584818!5m2!1ses!2sco"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Chatarrería H&B"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Ubicacion;
