import HeroSection3 from "../components/HeroSection/HeroSection3";
import { FaWhatsapp } from "react-icons/fa";
import OurProjects from "../components/OurProjects/OurProjects";

import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";


function ContactSection() {
  const mensaje = "¡Hola! Me gustaría saber más sobre los servicios de Metalúrgica IGM."; // Mensaje predeterminado (opcional)
  return (
    <main>
      {/* <HeroSection3 />
      <OurProjects />
      <ContactUs /> */}
      <div className="h-[100vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Página en proceso
        </h1>
      <img
            className=""
            src="images/robot.png"
            alt="glasses photo"
            style={{  height: "60%" }}
          />

      </div>
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

export default ContactSection;
