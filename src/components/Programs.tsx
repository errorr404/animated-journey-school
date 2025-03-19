
import React from "react";
import Container from "./ui/container";
import SectionTitle from "./ui/section-title";
import ScrollReveal from "./ScrollReveal";

const academicLevels = [
  {
    name: "Pre-Primary",
    grades: ["Nursery", "LKG", "UKG"],
    description: "Foundation years focused on developing basic skills, curiosity, and social abilities through play-based learning.",
    image: "https://images.unsplash.com/photo-1587089879249-87bf7d2972df?q=80&w=1569&auto=format&fit=crop",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Primary",
    grades: ["1st", "2nd", "3rd", "4th", "5th"],
    description: "Building core academic competencies in language, mathematics, and science while nurturing creativity and critical thinking.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    name: "Middle School",
    grades: ["6th", "7th", "8th"],
    description: "Expanding knowledge base with more complex subjects while developing independent study skills and personal responsibility.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1632&auto=format&fit=crop",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

const Programs = () => {
  return (
    <section id="academics" className="py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            overline="Academic Programs"
            title="Comprehensive Education for Every Stage"
            description="Our curriculum is designed to meet the unique developmental needs of children at each stage of their educational journey."
          />
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {academicLevels.map((level, index) => (
            <ScrollReveal 
              key={level.name} 
              animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
              delay={index * 100}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <div className={`absolute inset-0 bg-gradient-radial ${level.color} z-0`}></div>
                  <div className="absolute inset-2 rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${level.image})` }}></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary uppercase rounded-full bg-primary/10">
                    {level.name}
                  </div>
                  
                  <h3 className="text-2xl font-bold">Grades: {level.grades.join(", ")}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {level.description}
                  </p>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    {level.grades.map((grade) => (
                      <span 
                        key={grade} 
                        className="px-3 py-1 text-sm font-medium rounded-full bg-secondary border border-border/50"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Programs;
