import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

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
  const mensaje = "¡Hola! Me gustaría saber más sobre los servicios de Metalúrgica IGM."; // Mensaje predeterminado (opcional)

  return (
    <div
    id="contactUsSection"
      className="min-h-[35vh] w-full flex items-center justify-center"
      ref={sectionRef}
    >
      <motion.section
        className=" w-full "
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
         <motion.div
          className="flex gap-5 mb-4 ms-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
              <a href="https://www.facebook.com/share/1WxMX337WU/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
         <FaFacebook size={30} />
    </a>
            <a 
      href={`https://www.instagram.com/metalurgicaigmsrl`} 
        target="_blank" 
        rel="noopener noreferrer"
      >  <FaInstagram size={30} /></a>
     
          <a 
        href={`https://wa.me/8498504567?text=${encodeURIComponent(mensaje)}`} 
        target="_blank" 
        rel="noopener noreferrer"
      > <FaWhatsapp size={30} /></a> 
      
        </motion.div>

        {/* Mapa */}
        <motion.div
          className="lg:h-[55vh] h-[60vh] w-full bg-slate-400"
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
