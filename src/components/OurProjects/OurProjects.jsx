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
      className="min-h-[80vh] w-full flex flex-col items-center justify-evenly py-16"

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
        {['imaget1', 'imaget2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9'].map((image, index) => (
          <motion.div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="w-[100%] h-[400px] sm:w-[430px] sm:h-[400px] rounded-lg drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1, // Duración de la animación
              delay: index * 0.2, // Retraso progresivo entre cada imagen
              ease: "easeOut", // Transición más suave
            }}
          >
            <img
              src={`/images/${image}.png`}
              className="h-full w-full object-cover rounded-lg"
              alt={`Project ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );


// return (
//   <div className="bg-white text-gray-900 py-16 px-8">
//       <div className="container mx-auto flex flex-col lg:flex-row items-start">
        
//         {/* Left Panel */}
//         <div className="w-full lg:w-1/2 mb-10 lg:mb-0 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-h-[60vh]">
//           <img src="https://media.istockphoto.com/id/497956136/photo/light-it-up-sydney.jpg?s=170667a&w=0&k=20&c=JF9bPB26vNB_nygl0KczQwWhoGPQ3eBWPQ1F8vbhu8U=" alt="Project and Activity Feed" className="w-full h-full object-cover" />
//         </div>

//         {/* Right Content */}
//         <div className="w-full lg:w-1/2 lg:pl-12">
//           <h2 className="text-sm font-semibold text-blue-600 uppercase">
//             Deploy faster
//           </h2>
//           <h1 className="text-4xl font-bold text-gray-900 mt-2">
//             A better workflow
//           </h1>
//           <p className="text-gray-600 mt-4">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
//           </p>

//           {/* Features */}
//           <div className="mt-8 space-y-6">
//             <div className="flex items-start">
//               <span className="text-blue-600 text-xl mr-4">🚀</span>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Push to deploy
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <span className="text-purple-600 text-xl mr-4">🔒</span>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   SSL certificates
//                 </h3>
//                 <p className="text-gray-600">
//                   Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <span className="text-indigo-600 text-xl mr-4">💾</span>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Database backups
//                 </h3>
//                 <p className="text-gray-600">
//                   Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
// )

}

export default OurProjects;
