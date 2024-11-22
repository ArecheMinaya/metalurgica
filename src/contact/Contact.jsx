// import { FaWhatsapp } from "react-icons/fa";
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
// import Footer from "../components/Footer/Footer";
// import ContactUs from "../components/ContactUs/ContactUs";


// function ContactSection() {
//   const mensaje = "¡Hola! Me gustaría saber más sobre los servicios de Metalúrgica IGM."; // Mensaje predeterminado (opcional)
//   return (
//     <main>
//       {/* <HeroSection3 />
//       <OurProjects />
//       <ContactUs /> */}
//       {/* <ContactForm/> */}
//       <AddressForm />
//  <ContactUs />
//     {/* <ContactForm /> */}
//       <Footer />
//       <div class="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-4 rounded-full">
//       <a 
//         href={`https://wa.me/8498504567?text=${encodeURIComponent(mensaje)}`} 
//         target="_blank" 
//         rel="noopener noreferrer"
//       > <FaWhatsapp size={40} /></a> 
//       </div>

//     </main>
//   );
// }


// const SERVICE_ID = "service_7vogwg7";
// const TEMPLATE_ID = "template_rxyvxk8";
// const PUBLIC_KEY = "a4szbS_jx8EcZNlCS";

// const ContactForm = () => {
//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
//           .then((result) => {
//             console.log(result.text);
//             alert('Message Sent Successfully')
//           }, (error) => {
//             console.log(error.text);
//             alert('Something went wrong!')
//           });
//         e.target.reset()
//       };
//     return (
//         <div style={{width:'100vw', height: '70vh', display:'flex'}}>
//             <form class="formContainer" onSubmit={handleOnSubmit}>
//                 <h2>Send me a message. Let's have a chat!</h2>
//                 <div class="formElement">
//                     <label for="from_name">Name</label>
//                     <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
//                 </div>

//                 <div class="formElement">
//                     <label>E-mail</label>
//                     <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
//                 </div>

//                 <div class="formElement">
//                     <label for="message">Message</label>
//                     <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
//                 </div>
//                 <button type='submit' className='formButton'>Submit</button>
//             </form>
//         </div>
//     )
// }


// export default ContactSection;




import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Footer from "../components/Footer/Footer";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_7vogwg7";
const TEMPLATE_ID = "template_rxyvxk8";
const PUBLIC_KEY = "a4szbS_jx8EcZNlCS";

function ContactSection() {
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

  const handleOnSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
              .then((result) => {
                console.log(result.text);
                alert('Mensage enviado con exito')
              }, (error) => {
                console.log(error.text);
                alert('Algo salio mal!')
              });
            e.target.reset()
          };

  return (
    <div id="#" className=" w-full">
    <div
    id="contactUsSection"
      className="min-h-[85vh] w-full flex items-center justify-center py-20 px-5"
      ref={sectionRef}
    >
      <motion.section
        className="shadow-lg bg-white rounded-xl flex lg:flex-row border border-slate-100 flex-col mt-16"
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
            className="mb-8 lg:mb-8 font-light tracking-wide mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Estamos aquí para atender sus necesidades. Su satisfacción es nuestra
            prioridad, por lo que puede contactarnos en cualquier momento a
            través de nuestro formulario en línea.
          </motion.p>
          <form action="#" className="space-y-8"  onSubmit={handleOnSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium tracking-wide"
              >
                Nombre
              </label>
              <input
                type="text"
               id="from_name" 
               name="from_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 tracking-wide"
                placeholder=""
                required
              />
            </motion.div>
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
               
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 tracking-wide"
              id="from_email" 
              name="from_email"
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
                 name="message"
                rows="6"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 tracking-wide"
                placeholder="Deja un mensaje..."
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="h-10 m-1 duration-200 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
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
    <Footer />       
    </div>
  );
}

export default ContactSection;

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
