import React, { useState, useEffect } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { IoBuildOutline } from "react-icons/io5";
import { GiCableStayedBridge } from "react-icons/gi";
import { motion } from "framer-motion";

function Services2() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("servicesSection");
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight && !hasAnimated) {
      setIsVisible(true); // Si el componente está completamente visible y no se ha animado aún
      setHasAnimated(true); // Evitar que se repita la animación
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="servicesSection"
      style={{
        backgroundImage: `url("images/image2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-20 w-full flex flex-row flex-wrap justify-center gap-16 px-5"
    >
      <motion.div
        className="backdrop-blur-sm bg-black/25 w-[380px] flex flex-col justify-center gap-y-5 py-8 px-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <FaRegBuilding size={50} color="white" />
        <h4 className="font-semibold tracking-wide text-2xl text-white">
          Fabricación y montaje de estructuras metálicas
        </h4>
        <p className="tracking-wide text-white">
          Diseñamos, fabricamos e instalamos estructuras metálicas a medida para una amplia variedad de aplicaciones industriales.
        </p>
      </motion.div>

      <motion.div
        className="backdrop-blur-sm bg-black/25 w-[380px] flex flex-col justify-center gap-y-5 py-8 px-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <IoBuildOutline size={50} color="white" />
        <h4 className="font-semibold tracking-wide text-2xl text-white">
          Corte y mecanizado de piezas industriales
        </h4>
        <p className="tracking-wide text-white">
          Proporcionamos soluciones personalizadas para la fabricación de piezas únicas o en grandes volúmenes, adaptándonos a las especificaciones exactas de nuestros clientes.
        </p>
      </motion.div>

      <motion.div
        className="backdrop-blur-sm bg-black/25 w-[380px] flex flex-col justify-center gap-y-5 py-8 px-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <GiCableStayedBridge size={50} color="white" />
        <h4 className="font-semibold tracking-wide text-2xl text-white">
          Proyectos de soldadura especializada
        </h4>
        <p className="tracking-wide text-white">
          Nos encargamos de proyectos que requieren alta precisión y seguridad, garantizando resultados duraderos y de alta calidad.
        </p>
      </motion.div>
    </div>
  );
}

export default Services2;