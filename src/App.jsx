import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './Projects/Projects';
import ServicesPage from './services/ServicesPage';
import ContactSection from './contact/Contact';



function App() {
  return (
    <Router>
    {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav> */}
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projectsSection" element={<Projects />} />
      <Route path="/servicesSection" element={<ServicesPage />} />
      <Route path="/contactUsSection" element={<ContactSection />} />
    </Routes>
  </Router>
  );
}

export default App;
