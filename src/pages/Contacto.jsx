import React from "react";

const Contacto = () => {

  // NUMEROS
  const numero1 = "573016905896";
  const numero2 = "573052982089";

  // MENSAJES
  const mensajeCompra1 =
    "Hola, quiero vender chatarra y solicitar recolección a domicilio. ¿Me pueden dar información y precio?";

  const mensajeCompra2 =
    "Hola, quiero vender chatarra y solicitar recolección a domicilio. ¿Me pueden dar información y precio?";

  const mensajeAcarreo =
    "Hola, necesito un servicio de acarreo. ¿Me pueden dar información y disponibilidad?";

  // LINKS WHATSAPP
  const linkCompra1 =
    `https://wa.me/${numero1}?text=${encodeURIComponent(mensajeCompra1)}`;

  const linkCompra2 =
    `https://wa.me/${numero2}?text=${encodeURIComponent(mensajeCompra2)}`;

  const linkAcarreo =
    `https://wa.me/${numero2}?text=${encodeURIComponent(mensajeAcarreo)}`;

  return (
    <section className="bg-white py-16 scroll-mt-20" id="contacto">

      <div className="max-w-6xl mx-auto px-4">

        {/* TITULO */}
        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
            Contáctanos
          </h2>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Compramos chatarra y la recogemos directamente en tu domicilio.
            Atención rápida por WhatsApp.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* COMPRA 1 */}
          <a
            href={linkCompra1}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B7570D] text-white p-6 rounded-xl shadow-md hover:opacity-90 transition"
          >
            <h3 className="text-xl font-bold">
              Compra de chatarra con recolección
            </h3>

            <p className="mt-2 text-sm opacity-90">
              Compra directa y recogida en tu domicilio.
            </p>

            <span className="block mt-4 font-semibold">
              WhatsApp: 301 690 5896
            </span>
          </a>


          {/* COMPRA 2 */}
          <a
            href={linkCompra2}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121513] text-white p-6 rounded-xl shadow-md hover:opacity-90 transition"
          >
            <h3 className="text-xl font-bold">
              Compra de chatarra con recolección
            </h3>

            <p className="mt-2 text-sm opacity-90">
              Compra directa y recogida en tu domicilio.
            </p>

            <span className="block mt-4 font-semibold">
              WhatsApp: 305 298 2089
            </span>
          </a>


          {/* ACARREOS EXTRA */}
          <a
            href={linkAcarreo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:opacity-90 transition"
          >
            <h3 className="text-xl font-bold">
              Servicio de acarreos
            </h3>

            <p className="mt-2 text-sm opacity-90">
              Transporte independiente de materiales y escombros.
            </p>

            <span className="block mt-4 font-semibold">
              WhatsApp: 305 298 2089
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contacto;
