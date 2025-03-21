import React from 'react';
import Container from './ui/container';
import { Book, Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.jpg" alt="School Logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold tracking-tight">New Era English School</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Providing quality education and shaping the future of our children since 2015.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Academics', 'Principal', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-white/70 text-sm">Naka Chowk, Purnea City, Purnea, Bihar - 854301</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+919135531843"
                  className="text-white/70 text-sm hover:text-primary transition-colors duration-200"
                >
                  9135531843
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@neweraenglishschool.com"
                  className="text-white/70 text-sm hover:text-primary transition-colors duration-200"
                >
                  info@neweraenglishschool.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <p className="text-white/70 text-sm">
              Stay connected with us on social media for updates and announcements.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, url: '#' },
                { icon: <Twitter className="h-5 w-5" />, url: '#' },
                { icon: <Instagram className="h-5 w-5" />, url: '#' },
                { icon: <Linkedin className="h-5 w-5" />, url: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                  aria-label={`Social media ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">© {currentYear} New Era English School. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
