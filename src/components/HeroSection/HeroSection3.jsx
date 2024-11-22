import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection3 = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center" style={{ backgroundImage: "url('images/heroimg.png')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative text-center text-white z-10 px-4 md:px-8">
   
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="text-3xl font-bold tracking-wide text-red-600 lg:text-5xl">
                Metalúrgica
              </span>
              IGM
              <span className="text-3xl font-bold tracking-wide text-red-600 lg:text-3xl">
                srl
              </span>
        </h1>
        
        <p className="text-md md:text-lg mb-8  w-[90%] mx-auto mt-8">
        En Metalurgia IGM nos enorgullece presentar una selección de nuestros proyectos más destacados, los cuales reflejan nuestra experiencia y compromiso con la excelencia en la industria metalúrgica. Descubre cómo hemos contribuido al avance de diversos sectores mediante la precisión y eficiencia en nuestros procesos.
        </p>
        
        <div className="flex justify-center gap-4">
        <Link        to="/contactUsSection#"
         smooth={true}
         duration={500}
         offset={-70}>
         <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition">
         Contáctanos
          </a>
         </Link>
         <Link to="/">
         <a href="#" className="text-white font-semibold py-2 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Sobre nosotros →
          </a>
         </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
