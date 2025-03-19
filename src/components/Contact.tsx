
import React from "react";
import Container from "./ui/container";
import SectionTitle from "./ui/section-title";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <Container>
        <ScrollReveal>
          <SectionTitle
            overline="Get in Touch"
            title="Contact Us"
            description="We're here to answer any questions you may have about our programs and admissions."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal animation="fade-in-right">
            <div className="space-y-10">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                      +91 123 456 7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@neweraenglishschool.com" className="hover:text-primary transition-colors">
                      info@neweraenglishschool.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-left" delay={200}>
            <form className="space-y-6 glass p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="What would you like to know?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
