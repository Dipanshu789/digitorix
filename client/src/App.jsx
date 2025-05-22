import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
      <Footer />
    </>
    
  );
}
