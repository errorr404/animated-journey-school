
import React from "react";
import Container from "./ui/container";
import { ArrowRight, Calendar, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pt-16 overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>
      </div>

      <Container className="relative z-10 pb-24 w-full">
        <div className="max-w-3xl text-white">
          <div className="mb-6 inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded-full bg-primary animate-fade-in">
            Shaping the future
          </div>
            
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Excellence in <br />
            <span className="text-primary">Education</span>
          </h1>
            
          <p className="text-xl text-white/90 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            New Era English School provides a nurturing environment where students develop knowledge, character, and the skills to succeed in a changing world.
          </p>
            
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <a 
              href="#academics" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded hover:bg-primary/90 transition-colors duration-200"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
              
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Quick Links Bar */}
        <div className="absolute left-0 right-0 bottom-0 bg-primary/90 backdrop-blur-sm transform translate-y-1/2 hidden md:block">
          <Container>
            <div className="grid grid-cols-3 gap-4 -my-6">
              <div className="bg-white p-6 rounded-sm shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">School Calendar</h3>
                  <p className="text-sm text-gray-600">View upcoming events</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Admission Forms</h3>
                  <p className="text-sm text-gray-600">Download application</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Virtual Tour</h3>
                  <p className="text-sm text-gray-600">Explore our campus</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
