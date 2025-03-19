
import React from "react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import ScrollReveal from "@/components/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Parent",
      avatar: "PS",
      quote: "New Era English School has provided my child with exceptional education and character-building opportunities. The teachers are dedicated and the environment is nurturing.",
      color: "bg-gradient-to-br from-orange-100 to-pink-100 border-orange-200 shadow-orange-100/50",
      iconColor: "text-orange-400"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Parent",
      avatar: "RK",
      quote: "The school's focus on both academics and extracurricular activities has helped my daughter become more confident and well-rounded. We couldn't be happier.",
      color: "bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200 shadow-blue-100/50",
      iconColor: "text-blue-400"
    },
    {
      id: 3,
      name: "Sunita Verma",
      role: "Former Student",
      avatar: "SV",
      quote: "My years at New Era English School gave me a strong foundation that has helped me succeed in higher education. The supportive teachers and quality education made all the difference.",
      color: "bg-gradient-to-br from-green-100 to-teal-100 border-green-200 shadow-green-100/50",
      iconColor: "text-green-400"
    }
  ];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-blue-900/10">
      <Container>
        <ScrollReveal animation="fade-in">
          <SectionTitle
            overline="Testimonials"
            title="What Parents & Students Say"
            description="Hear from our community about their experiences at New Era English School."
          />

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={testimonial.id}
                animation="fade-in-up"
                delay={index * 200}
                className="h-full"
              >
                <div 
                  className={`relative h-full p-6 rounded-xl border ${testimonial.color} transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
                >
                  <Quote 
                    className={`absolute -top-4 -left-4 w-8 h-8 p-1.5 rounded-full bg-white ${testimonial.iconColor} animate-pulse-slow`} 
                  />
                  <div className="flex flex-col h-full">
                    <blockquote className="flex-1 mb-4 italic text-gray-700 dark:text-gray-300">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center mt-auto">
                      <Avatar className="w-10 h-10 border-2 border-white shadow-md">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default Testimonials;
