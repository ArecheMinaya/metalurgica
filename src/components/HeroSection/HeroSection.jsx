import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importamos Link desde react-scroll

function HeroSection() {
  return (
    <div
    id="home"
      className="min-h-[95vh] bg-slate-500 w-full justify-center items-center flex py-10 px-5"
      style={{
        backgroundImage: `url("images/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col px-6 py-14 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center bg-white rounded-xl mt-[100px]">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg ps-5">
            <motion.h1
              className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-3xl font-bold tracking-wide text-red-600 lg:text-5xl">
                Metalúrgica
              </span>
              IGM
              <span className="text-3xl font-bold tracking-wide text-red-600 lg:text-3xl">
                srl
              </span>
            </motion.h1>
            <motion.p
              className="tracking-wide text-gray-800 font-semibold text-md lg:text-xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Soluciones Metalúrgicas de Alta Calidad
            </motion.p>
            <AnimatedList />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <motion.img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="images/heroImg2.png"
            alt="glasses photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

const AnimatedList = () => {
  const items = [
    "Compromiso con la calidad",
    "Soluciones a medida",
    "Eficiencia y puntualidad",
  ];

  return (
    <div className="mt-8 space-y-5">
      {items.map((item, index) => (
        <motion.p
          key={index}
          className="flex items-center -mx-2 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.3,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-2 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mx-2">{item}</span>
        </motion.p>
      ))}
      <br/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: items.length * 0.3,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="mt-8"
      >
        {/* Aquí usamos Link de react-scroll */}
        <Link
          to="contactUsSection" // El ID de la sección a la que queremos desplazarnos
          smooth={true}
          duration={500}
          offset={-70} // Desplazamos 100px antes de la sección
          className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
        >
          Contactanos
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
