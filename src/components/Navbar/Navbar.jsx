import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("aboutUsSection");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <nav className="py-5 px-5 border-gray-200 shadow-md fixed bg-white w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
          <Link
              to={"home"}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative px-4 py-2 text-gray-600 cursor-pointer"
              onClick={() => handleSetActive("")}
            >
            <img src="images/logo.png" alt="Logo" className="h-10 md:16" />
            </Link>
       

        {/* Menú para pantallas grandes */}
        <div className="hidden lg:flex space-x-4">
          {["aboutUsSection", "servicesSection", "projectsSection", "contactUsSection"].map((section, index) => (
            <Link
              key={index}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative px-4 py-2 text-gray-600 cursor-pointer"
              onClick={() => handleSetActive(section)}
            >
              <span>{section === "aboutUsSection" ? "Nosotros" : section === "servicesSection" ? "Servicios" : section === "projectsSection" ? "Proyectos" : "Contáctanos"}</span>
              {activeLink === section && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Icono para pantallas pequeñas (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú para pantallas pequeñas (Mobile) */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          {["aboutUsSection", "servicesSection", "projectsSection", "contactUsSection"].map((section, index) => (
            <Link
              key={index}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className={`block text-gray-600 py-2 ${activeLink === section ? "text-red-500" : ""}`}
              onClick={() => {
                handleSetActive(section);
                toggleMenu(); // Cierra el menú después de seleccionar una opción en móvil
              }}
            >
              {section === "aboutUsSection" ? "Nosotros" : section === "servicesSection" ? "Servicios" : section === "projectsSection" ? "Proyectos" : "Contáctanos"}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
