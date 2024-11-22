import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeroSection2() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br text-white">
      <div className="mx-auto lg:ps-20 ps-6 lg:pe-0 pe-6 pt-28 pb-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <motion.div
          className="max-w-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            #1 en Metalúrgica
          </span>
          <motion.h1
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Metalúrgica<span className="text-red-600 dark:red-blue-500">IGM</span>srl
          </motion.h1>
          <motion.p
            className="text-gray-600 text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Transformamos el metal en soluciones precisas y duraderas, impulsando el progreso industrial con tecnología de vanguardia y un enfoque en la excelencia.
          </motion.p>
          <div className="space-x-4">
            <Link 

             to="/contactUsSection#"
            >
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                Contáctanos
              </a>
            </Link>
            
          </div>
        </motion.div>

        {/* Right Sidebar */}
        <motion.div
          className="mt-10 lg:mt-0 rounded-lg shadow-xl h-[60vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="./images/hero.png"
            alt="Hero"
            className="rounded-lg shadow-lg h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection2;
