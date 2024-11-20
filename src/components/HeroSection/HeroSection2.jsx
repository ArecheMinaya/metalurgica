import React from 'react';

import { Link } from 'react-router-dom';

function HeroSection2() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br text-white">
      <div className="mx-auto lg:ps-20 ps-6 lg:pe-0 pe-6 pt-28 pb-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="max-w-lg space-y-6">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            #1 en Metalúrgica
          </span>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"> Metalúrgica<span class="text-red-600 dark:red-blue-500">IGM</span>srl</h1>
          <p className="text-gray-600 text-xl">
          transformamos el metal en soluciones precisas y duraderas, impulsando el progreso industrial con tecnología de vanguardia y un enfoque en la excelencia.
          </p>
          <div className="space-x-4">
          <Link>
         <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition">
         Contáctanos
          </a>
         </Link>
           <Link>
           <button className="text-red-400 hover:underline font-semibold">
             Sobre nosotros →
            </button>
           </Link>
           
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="mt-10 lg:mt-0 rounded-lg  shadow-xl h-[60vh]">
          <img
            src="./images/hero.png"
            alt="Hero"
            className="rounded-lg shadow-lg h-full"
          />
        </div>
      
      </div>
    </div>
  );
}

export default HeroSection2;