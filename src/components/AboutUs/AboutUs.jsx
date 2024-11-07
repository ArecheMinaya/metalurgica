import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

function AboutUs() {
  // Estado para controlar si el componente está en el viewport
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Estado adicional para controlar que la animación solo ocurra una vez

  // Detectamos si el componente está en el viewport usando el evento 'scroll'
  const handleScroll = () => {
    const element = document.getElementById("aboutUsSection");
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight && !hasAnimated) {
      setIsVisible(true); // Si el componente está completamente visible y no se ha animado aún
      setHasAnimated(true); // Evitar que se repita la animación
    }
  };

  useEffect(() => {
    // Añadimos el listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiamos el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]); // Dependemos del estado `hasAnimated` para evitar repetir la animación

  return (
    <div
      id="aboutUsSection" // Le damos un ID a la sección para poder detectarla en el scroll
      className="w-full flex md:flex-row justify-evenly items-center flex-col-reverse h-auto min-h-[500px] pt-20 pb-20 md:pb-0 bg-slate-50"
      style={{
        backgroundImage: `url("images/fondo2.png")`,
        backgroundPosition: "center",
      }}
    >
      <motion.img
        src="/images/about.png"
        alt="About"
        className="w-[90%] md:w-[45%] h-auto rounded-lg shadow-lg mt-5 md:mt-0 max-w-[500px]"
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
          className="mt-9 lg:text-xl"
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

        <motion.div
          className="flex gap-5 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaWhatsapp size={30} />
          <BiLogoGmail size={30} />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
