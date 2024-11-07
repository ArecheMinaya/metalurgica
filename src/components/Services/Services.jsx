import React, { useState, useEffect } from "react";
import { FaChartLine } from 'react-icons/fa'; 
import { motion } from "framer-motion"; // Importar motion

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  // Detectamos si el componente está en el viewport usando el evento 'scroll'
  const handleScroll = () => {
    const element = document.getElementById("servicesSection");
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true); // Si el componente está completamente visible
    }
  };

  useEffect(() => {
    // Añadimos el listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiamos el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="servicesSection" // Agregamos un ID para detectar el scroll
      className="min-h-[60vh] w-full pb-20 flex flex-col items-center justify-center bg-white"
      style={{
        backgroundImage: `url("images/fondo2.png")`,
        backgroundPosition: "center",
      }}
    >
      {/* Título con animación */}
      <motion.div
        className="w-[85%] flex mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h3 className="font-bold tracking-wide md:mt-12 text-3xl lg:text-4xl">Por qué elegirnos</h3>
      </motion.div>

      {/* Tarjetas con animación */}
      <div className="flex flex-wrap justify-evenly items-center gap-y-10 gap-6 w-[85%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <InvestmentCard
            icon={FaChartLine}
            title="Compromiso con la calidad"
            description="Trabajamos con los mejores materiales y procesos para asegurar la máxima durabilidad."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <InvestmentCard
            icon={FaChartLine}
            title="Soluciones a medida"
            description="Nos adaptamos a las necesidades de cada cliente, ofreciendo productos y servicios personalizados."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <InvestmentCard
            icon={FaChartLine}
            title="Eficiencia y puntualidad"
            description="Cumplimos con los plazos establecidos sin comprometer la calidad."
          />
        </motion.div>
      </div>
    </div>
  );
}

function InvestmentCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col justify-start items-start p-4 max-w-md shadow-[0px_4px_15px_5px_rgba(0,0,0,0.1)] rounded-xl bg-white">
      {/* Icono circular con sombra y resplandor */}
      <div className="bg-red-600 rounded-full p-6 shadow-lg shadow-red-300 mb-4 transition-transform transform hover:scale-105">
        <Icon className="text-white text-xl" />
      </div>
      <div className="w-10"></div>
      {/* Título */}
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {/* Línea debajo del título */}
        <div className="w-16 h-1 bg-red-700 mb-2"></div>
        {/* Descripción */}
        <p className="text-gray-600 text-left">{description}</p>
      </div>
    </div>
  );
}

export default Services;