import HeroSection3 from "../components/HeroSection/HeroSection3";
import { FaWhatsapp } from "react-icons/fa";
import OurProjects from "../components/OurProjects/OurProjects";

import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";


function Projects() {
  const mensaje = "¡Hola! Me gustaría saber más sobre los servicios de Metalúrgica IGM."; // Mensaje predeterminado (opcional)
  return (
    <main>
      <div id="#"></div>
      <HeroSection3 />
      <OurProjects />
      <ContactUs />
      <Footer />
      <div class="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-4 rounded-full">
      <a 
        href={`https://wa.me/8498504567?text=${encodeURIComponent(mensaje)}`} 
        target="_blank" 
        rel="noopener noreferrer"
      > <FaWhatsapp size={40} /></a> 
      </div>

    </main>
  );
}

export default Projects;
