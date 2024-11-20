import React, { useState, useEffect, useRef } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { IoBuildOutline } from "react-icons/io5";
import { GiCableStayedBridge } from "react-icons/gi";
import { motion } from "framer-motion";

function Services2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectamos el observer para evitar ejecuciones innecesarias
        }
      },
      {
        threshold: 0.5, // Se activa cuando el 50% del elemento está visible
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
      ref={sectionRef}
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
        <FaRegBuilding size={30} color="white" />
        <h4 className="font-semibold tracking-wide text-xl text-white">
          Fabricación y montaje de estructuras metálicas
        </h4>
        <p className=" text-white">
          Diseñamos, fabricamos e instalamos estructuras metálicas a medida para una amplia variedad de aplicaciones industriales.
        </p>
      </motion.div>

      <motion.div
        className="backdrop-blur-sm bg-black/25 w-[380px] flex flex-col justify-center gap-y-5 py-8 px-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <IoBuildOutline size={30} color="white" />
        <h4 className="font-semibold text-xl text-white">
          Corte y mecanizado de piezas industriales
        </h4>
        <p className="text-white">
          Proporcionamos soluciones personalizadas para la fabricación de piezas únicas o en grandes volúmenes, adaptándonos a las especificaciones exactas de nuestros clientes.
        </p>
      </motion.div>

      <motion.div
        className="backdrop-blur-sm bg-black/25 w-[380px] flex flex-col justify-center gap-y-5 py-8 px-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <GiCableStayedBridge size={30} color="white" />
        <h4 className="font-semibold tracking-wide text-xl text-white">
          Proyectos de soldadura especializada
        </h4>
        <p className="text-white">
          Nos encargamos de proyectos que requieren alta precisión y seguridad, garantizando resultados duraderos y de alta calidad.
        </p>
      </motion.div>
    </div>
  );
}

export default Services2;
