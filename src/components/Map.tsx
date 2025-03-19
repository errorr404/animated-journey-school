
import React from "react";
import Container from "./ui/container";
import SectionTitle from "./ui/section-title";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Navigation } from "lucide-react";

const Map = () => {
  return (
    <section id="location" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            overline="Our Location"
            title="Find Us Here"
            description="We're conveniently located and easy to reach."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-in-right">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">School Address</h3>
                  <p className="text-muted-foreground">
                    New Era English School<br />
                    New Era Road, School Area<br />
                    City, State - Pincode
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.app.goo.gl/GMC3C9rvRZrrDiEz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-border/60">
                    <span className="text-foreground">Monday - Friday</span>
                    <span className="text-muted-foreground">8:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/60">
                    <span className="text-foreground">Saturday</span>
                    <span className="text-muted-foreground">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-left" delay={200}>
            <div className="glass rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9984889649584!2d77.57420081482169!3d12.867619990932438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158139cc1a73%3A0x9fb4d79de5d5c8e2!2sNew%20Era%20English%20School!5e0!3m2!1sen!2sin!4v1627318842149!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full aspect-video"
                title="New Era English School Map"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Map;
