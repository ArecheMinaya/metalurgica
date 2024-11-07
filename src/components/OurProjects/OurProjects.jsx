import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function OurProjects() {
  // Estado para controlar la visibilidad de cada proyecto
  const [isVisible, setIsVisible] = useState(false);

  const projectRefs = useRef([]);

  useEffect(() => {
    // Crear un IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Se activa la animación cuando el proyecto entra en el viewport
        }
      });
    }, { threshold: 0.5 }); // Threshold es 50% del elemento visible para activar la animación

    // Observar cada proyecto individualmente
    projectRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect(); // Limpiar el observer cuando el componente se desmonta
    };
  }, []);

  return (
    <div
      id="projectsSection"
      className="min-h-[80vh] w-full flex flex-col items-center justify-evenly py-20"
      style={{
        backgroundImage: `url("images/fondo2.png")`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-[85%] mb-20">
        <motion.h3
          className="font-bold tracking-wide md:mt-12 text-3xl lg:text-4xl text-red-700"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Nuestros Proyectos
        </motion.h3>
      </div>

      <div className="flex flex-wrap gap-y-10 w-[100%] justify-evenly px-5">
        {['imaget1', 'imaget2', 'image3', 'image4', 'image5', 'image6'].map((image, index) => (
          <motion.div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="w-[100%] h-[400px] sm:w-[430px] sm:h-[500px] shadow-lg bg-zinc-50 rounded-xl p-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2, // Duración de la animación
              delay: index * 0.3, // Retraso progresivo entre cada imagen
              ease: "easeOut", // Transición más suave
            }}
          >
            <img
              src={`/images/${image}.png`}
              className="h-full rounded-lg"
              alt={`Project ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurProjects;
