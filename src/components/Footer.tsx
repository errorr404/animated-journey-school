
import React from "react";
import Container from "./ui/container";
import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="banner-stripe"></div>
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-white" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">
                  New Era
                </span>
                <span className="text-xs font-medium text-white/80">English School</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Providing quality education and shaping the future of our children since 2000.
            </p>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>New Era Road, School Area, City, State - Pincode</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white">+91 123 456 7890</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@neweraenglishschool.com" className="hover:text-white">info@neweraenglishschool.com</a>
              </p>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Academics", "Principal", "Gallery", "Location", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Resources</h3>
            <ul className="space-y-2">
              {[
                {name: "Admission Forms", href: "#"},
                {name: "School Calendar", href: "#"},
                {name: "Curriculum", href: "#"},
                {name: "Faculty & Staff", href: "#"},
                {name: "News & Events", href: "#"},
                {name: "Student Handbook", href: "#"},
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Follow Us</h3>
            <p className="text-white/70 text-sm">
              Stay connected with us on social media for updates and announcements.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, url: "#" },
                { icon: <Twitter className="h-5 w-5" />, url: "#" },
                { icon: <Instagram className="h-5 w-5" />, url: "#" },
                { icon: <Linkedin className="h-5 w-5" />, url: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label={`Social media ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-4 py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} New Era English School. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
