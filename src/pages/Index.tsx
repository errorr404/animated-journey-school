
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
    document.title = "NECS, Purnea";
    
    // Add the font stylesheet to the document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Comic+Neue&family=Indie+Flower&family=Schoolbell&display=swap';
    document.head.appendChild(link);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Accessibility skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" className="font-sans">
        <Hero />
        <About />
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
