import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Container from "./ui/container";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Principal", href: "#principal" },
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        {
          "bg-background/95 backdrop-blur-md shadow-sm border-b py-3": isScrolled,
          "bg-background/95 backdrop-blur-md border-b": !isScrolled,
        }
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img 
            src="/assets/logo.jpg"
            alt="School Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-bold tracking-tight">
            New Era English School
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 bg-background/95">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-secondary transition-colors duration-200 link-underline"
            >
              {link.name}
            </a>
          ))}
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
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
