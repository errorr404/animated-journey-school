
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Principal from "@/components/Principal";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "New Era English School";
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Accessibility skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" className="pt-16 md:pt-24">
        <Hero />
        
        {/* Content sections with appropriate spacing */}
        <div className="mt-16 md:mt-24">
          <About />
        </div>
        <Programs />
        <Principal />
        <Gallery />
        <Testimonials />
        <Map />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
