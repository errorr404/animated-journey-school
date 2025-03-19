
import React from "react";
import Container from "./ui/container";
import SectionTitle from "./ui/section-title";
import ScrollReveal from "./ScrollReveal";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Quality Education",
    description:
      "We provide a comprehensive curriculum that focuses on academic excellence and personal growth.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Faculty",
    description:
      "Our dedicated teachers bring years of experience and passion to create an engaging learning environment.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Holistic Development",
    description:
      "We emphasize character building, critical thinking, and creative expression alongside academics.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Modern Facilities",
    description:
      "Our school is equipped with state-of-the-art facilities to enhance the learning experience.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <Container>
        <ScrollReveal>
          <SectionTitle
            overline="About Us"
            title="Building a Foundation for Excellence"
            description="New Era English School has been nurturing young minds since its establishment, providing quality education from Nursery to 8th Standard."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-in-right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop')] bg-cover bg-center rounded-2xl transform transition-transform duration-700 hover:scale-105"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-xl max-w-xs">
                <p className="font-medium text-foreground">
                  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal animation="fade-in-left" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At New Era English School, we believe in creating a supportive environment where students can discover their potential and develop into confident individuals. Our approach combines academic rigor with values-based education.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-left" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white rounded-lg shadow-subtle border border-border/50 hover:border-primary/20 transition-colors duration-300"
                  >
                    <div className="p-2 bg-primary/10 rounded-full w-fit mb-4">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
