
import { FaWhatsapp } from "react-icons/fa";
import HeroSection2 from "../components/HeroSection/HeroSection2";
import AboutUs from "../components/AboutUs/AboutUs";
import Services2 from "../components/CallMe/CallMe";
import Services from "../components/Services/Services";
import CustomerReviews from "../components/CustomerReview/CustomerReview";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";


function Home() {
  const mensaje = "¡Hola! Me gustaría saber más sobre los servicios de Metalúrgica IGM."; // Mensaje predeterminado (opcional)
  return (
    <main>

      <HeroSection2 />
      
      <Services2 />
    
      <AboutUs />
      <Services />
    
      <CustomerReviews />
    
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

export default Home;
