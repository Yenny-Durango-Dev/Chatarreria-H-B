import React from "react";
import GaleriaChatarra1 from '../assets/galeria-chatarra1.png'
import GaleriaChatarra2 from '../assets/galeria-chatarra2.png'
import GaleriaChatarra3 from '../assets/galeria-chatarra3.png'

const Galeria = () => {
  return (
    <div id="galeria">
      <section className="bg-gray-100 py-16" id="galeria">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
            Nuestra Galería
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Así trabajamos: orden, reciclaje responsable y transformación real de materiales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <img src={GaleriaChatarra1} alt="Chatarra reciclada" className="rounded-xl shadow-lg w-full" />
            <img src={GaleriaChatarra2} alt="Proceso de reciclaje" className="rounded-xl shadow-lg w-full" />
            <img src={GaleriaChatarra3} alt="Centro de acopio" className="rounded-xl shadow-lg w-full" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Galeria;
