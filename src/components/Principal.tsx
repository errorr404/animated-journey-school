
import React from "react";
import Container from "./ui/container";
import SectionTitle from "./ui/section-title";
import ScrollReveal from "./ScrollReveal";

const Principal = () => {
  return (
    <section id="principal" className="py-24 bg-secondary/50">
      <Container>
        <ScrollReveal>
          <SectionTitle
            overline="From the Principal's Desk"
            title="Principal's Message"
            description="A vision for holistic education and academic excellence."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-in-right">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glass p-2">
                <div className="h-full w-full relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-[url('/assets/principle.jpeg')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-lg py-2 px-4">
                <h4 className="font-semibold text-foreground">Renu Ranjan</h4>
                <p className="text-sm text-muted-foreground">Principal</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-left" delay={200}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="text-3xl font-serif text-primary">"</span>
                Welcome to New Era English School. Our mission is to provide a nurturing and stimulating environment where children can grow intellectually, emotionally, and socially. We believe in the potential of every child and strive to help them discover their unique talents and abilities.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our dedicated team of educators is committed to fostering a love for learning, creative thinking, and a strong sense of values in our students. We encourage them to question, explore, and understand the world around them while developing the skills needed for future success.
              </p>
              
              <p className="text-lg leading-relaxed">
                At New Era English School, we work in partnership with parents to ensure that children receive consistent support both at home and at school. Together, we can provide the best possible foundation for their future endeavors.
                <span className="text-3xl font-serif text-primary">"</span>
              </p>
              
              <div className="pt-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Renu Ranjan</h4>
                    <p className="text-sm text-muted-foreground">Principal, New Era English School</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Principal;
