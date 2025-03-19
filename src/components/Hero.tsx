
import React from "react";
import Container from "./ui/container";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary uppercase rounded-full bg-primary/10 animate-fade-in">
              Welcome to
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              New Era <br />
              <span className="text-primary">English School</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Nurturing minds, building character, and shaping the future leaders of tomorrow through quality education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "600ms" }}>
              <a 
                href="#academics" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary bg-transparent border border-primary rounded-lg hover:bg-primary/5 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none animate-fade-in-left" style={{ animationDelay: "800ms" }}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 animate-pulse-slow"></div>
            <div className="absolute inset-2 glass rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center animate-float">
              <span className="text-lg font-bold text-primary">Since 2000</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
