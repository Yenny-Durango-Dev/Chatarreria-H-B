import React from "react";

const Blog = () => {
  return (
  <div id="blog">
      <section className="bg-gray-100 py-16" id="blog">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#121513]">
          Blog de reciclaje
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Aprende sobre reciclaje, economía circular y cómo tu chatarra puede cambiar el mundo.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl">Cómo reciclar metal</h3>
            <p className="mt-2 text-gray-700">
              Guía práctica para separar correctamente tus materiales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl">Economía circular</h3>
            <p className="mt-2 text-gray-700">
              Cómo el reciclaje impulsa la sostenibilidad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl">Precios del mercado</h3>
            <p className="mt-2 text-gray-700">
              Tendencias y consejos para vender mejor.
            </p>
          </div>

        </div>

      </div>
    </section>
  </div>
  );
};

export default Blog;
