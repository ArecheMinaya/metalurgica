import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [map, setMap] = useState(null);
  const [viewport, setViewport] = useState({
    lat: 40.7128,
    lng: -74.0060,
    zoom: 13,
  });
  const [isOpen, setIsOpen] = useState(false);

  const sectionRef = useRef(null);

  // Detectamos la visibilidad del componente usando IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Si el componente está en el viewport, activamos la animación
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect(); // Limpiamos el observer cuando el componente se desmonta
      }
    };
  }, []);

  const onMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onMarkerClick = () => {
    setIsOpen(true); // Cuando se hace click en el marcador, abrimos el InfoWindow
  };

  return (
    <div
    id="contactUsSection"
      className="min-h-[85vh] w-full flex items-center justify-center py-20 px-5"
      ref={sectionRef}
    >
      <motion.section
        className="shadow-lg bg-white rounded-xl flex lg:flex-row border border-slate-100 flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-[600px] p-10">
          <motion.h2
            className="font-bold tracking-wide md:mt-12 text-3xl lg:text-4xl text-red-700"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Contáctanos
          </motion.h2>
          <motion.p
            className="mb-8 lg:mb-16 font-light sm:text-xl tracking-wide mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Estamos aquí para atender sus necesidades. Su satisfacción es nuestra
            prioridad, por lo que puede contactarnos en cualquier momento a
            través de nuestro formulario en línea.
          </motion.p>
          <form action="#" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium tracking-wide"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 tracking-wide"
                placeholder="name@flowbite.com"
                required
              />
            </motion.div>

            <motion.div
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium tracking-wide"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 tracking-wide"
                placeholder="Deja un mensaje..."
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Enviar mensaje
            </motion.button>
          </form>
        </div>

        {/* Mapa */}
        <motion.div
          className="lg:min-w-[600px] lg:w-[100%] lg:h-[80vh] h-[50vh] w-full bg-slate-400"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Map />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default ContactUs;

const containerStyle = {
  width: '100%',
  height: '100%', // Aquí cambiamos la altura para que ocupe el 100% del contenedor
};

const center = {
  lat: 18.5208056, // Coordenada latitudinal
  lng: -69.8159167, // Coordenada longitudinal
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Zoom ajustado para ver el área con el pin
      >
        {/* Colocamos el marcador (pin) en las coordenadas proporcionadas */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
