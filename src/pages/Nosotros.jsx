import React from "react";
import NosotrosChatarra1 from '../assets/nosotros-chatarra1.jpg'

const Nosotros = () => {
  return (
      <section className="bg-white py-16 scroll-mt-20" id="nosotros">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
              Quiénes somos
            </h2>
            <p className="mt-4 text-gray-700">
              En Chatarrería H&B trabajamos con responsabilidad ambiental, ética comercial
              y compromiso con nuestra comunidad. Transformamos residuos metálicos en
              oportunidades económicas y sostenibles.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Más de 10 años de experiencia</li>
              <li>✔ Pesaje transparente</li>
              <li>✔ Pago justo e inmediato</li>
              <li>✔ Reciclaje responsable</li>
            </ul>
          </div>

          <div>
            <img
              src={NosotrosChatarra1}
              alt="Equipo de Chatarrería H&B"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

        </div>
      </section>
  );
};

export default Nosotros;
