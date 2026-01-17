import React from "react";

const Contacto = () => {
  return (
    <div id="contacto">
      <section className="bg-white py-16" id="contacto">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
              Contáctanos
            </h2>
            <p className="mt-4 text-gray-700">
              Escríbenos y te respondemos rápido. Cotiza tu material sin compromiso.
            </p>

            <p className="mt-6 text-gray-700">📞 +57 300 000 0000</p>
            <p className="mt-2 text-gray-700">📧 contacto@chatarreriahb.com</p>
            <p className="mt-2 text-gray-700">📍 Tu dirección aquí</p>
          </div>

          <form className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
            <input type="text" placeholder="Nombre" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Correo" className="w-full p-3 border rounded" />
            <textarea placeholder="Mensaje" className="w-full p-3 border rounded"></textarea>

            <button className="bg-[#B7570D] text-white px-6 py-3 rounded-lg font-semibold w-full">
              Enviar mensaje
            </button>
          </form>

        </div>
      </section>
    </div>
  );
};

export default Contacto;
