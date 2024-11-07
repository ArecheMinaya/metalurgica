import AboutUs from "./components/AboutUs/AboutUs";
import Services2 from "./components/CallMe/CallMe";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import OurProjects from "./components/OurProjects/OurProjects";
import Services from "./components/Services/Services";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Services2 />
      <OurProjects />
     
      <ContactUs />
      <Footer />
      <div class="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-4 rounded-full">
        <FaWhatsapp size={40} />
      </div>
    </main>
  );
}

export default App;
