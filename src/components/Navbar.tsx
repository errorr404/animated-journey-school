
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Container from "./ui/container";
import { Book, Menu, X, Search, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Principal", href: "#principal" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white hidden md:block">
        <Container className="flex justify-between items-center py-2 text-sm">
          <div className="flex space-x-4">
            <a href="tel:+911234567890" className="flex items-center hover:text-gray-200">
              <Phone className="h-3 w-3 mr-1" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@neweraenglishschool.com" className="flex items-center hover:text-gray-200">
              <Mail className="h-3 w-3 mr-1" />
              <span>info@neweraenglishschool.com</span>
            </a>
          </div>
          <div className="flex space-x-2">
            <a href="#" className="py-1 px-3 hover:bg-white/10 rounded-sm transition-colors">Admissions</a>
            <a href="#" className="py-1 px-3 hover:bg-white/10 rounded-sm transition-colors">Parents</a>
            <a href="#" className="py-1 px-3 hover:bg-white/10 rounded-sm transition-colors">Students</a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "transition-all duration-300 py-3 bg-white shadow-sm", 
          {
            "py-3": isScrolled,
            "py-4": !isScrolled,
          }
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">
                New Era
              </span>
              <span className="text-xs font-medium text-gray-700">English School</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Search">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          {
            "translate-x-0": mobileMenuOpen,
            "translate-x-full": !mobileMenuOpen,
          }
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-foreground text-lg font-medium rounded-md hover:bg-secondary transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a href="tel:+911234567890" className="flex items-center px-4 py-3 text-foreground">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@neweraenglishschool.com" className="flex items-center px-4 py-3 text-foreground">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@neweraenglishschool.com</span>
              </a>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
