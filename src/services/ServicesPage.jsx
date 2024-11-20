
import { FaWhatsapp } from "react-icons/fa";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Services2 from "../components/CallMe/CallMe";
import Services from "../components/Services/Services";
import CustomerReviews from "../components/CustomerReview/CustomerReview";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";


function ServicesPage() {
  const mensaje = "¡Hola! Me gustaría saber más sobre los servicios de Metalúrgica IGM."; // Mensaje predeterminado (opcional)
  return (
    <main>

      <HeroSection />
      <Services />
      <Services2 />
      <div className="pt-10">
      <ContactUs />
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

export default ServicesPage;
