import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Si el elemento está en el viewport, activamos la animación
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectamos el observer una vez que la animación ha sido activada
        }
      },
      {
        threshold: 0.5, // La animación se activará cuando el 50% del elemento esté visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
    id="aboutUsSection" // Le damos un ID a la sección para poder 
      ref={sectionRef} // Usamos ref en lugar de id para el observer
      className="w-full flex md:flex-row justify-evenly items-center flex-col-reverse h-auto min-h-[90vh] pt-20 pb-20 md:pb-0 bg-white"
     
    >
      <motion.img
        src="/images/about.png"
        alt="About"
        className="w-[90%] md:w-[45%] h-auto rounded-lg shadow-lg mt-10 md:mt-0 max-w-[500px]"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="md:h-[60vh] h-auto w-[90%] md:w-[45%]">
        <motion.h3
          className="font-bold tracking-wide md:mt-12 text-3xl lg:text-4xl text-red-700"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Sobre Nosotros
        </motion.h3>

        <motion.h3
          className="font-semibold mt-2 text-5xl lg:text-6xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          ¿Quiénes somos?
        </motion.h3>

        <motion.p
          className="mt-9 text-gray-600 text-xl "
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="font-semibold text-red-700">Metalúrgica IGM SRL</span> es
          una empresa dedicada a ofrecer soluciones metalúrgicas de alta calidad, con
          años de experiencia en el sector. Desde nuestra fundación, nos hemos
          consolidado como un referente en la industria, brindando productos y servicios
          que cumplen con los más altos estándares de calidad y precisión.
        </motion.p>

       
      </div>
    </div>
  );
}

export default AboutUs;
