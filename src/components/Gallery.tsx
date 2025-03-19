
import React, { useState } from "react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import ScrollReveal from "@/components/ScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image, ImageOff } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/ffac1b73-e0bb-4170-8af0-9b7161bf7490.png",
      alt: "School celebration with deity decoration",
      caption: "Annual Saraswati Puja Celebration"
    },
    {
      id: 2,
      src: "/lovable-uploads/11143778-3f10-4124-aa4c-af37c4891126.png",
      alt: "Students performing with Indian flag",
      caption: "Republic Day Performance"
    },
    {
      id: 3,
      src: "/lovable-uploads/5ca3cd84-8db5-4c8b-9e08-b75d87227c93.png",
      alt: "Students in traditional attire with Indian flag",
      caption: "Independence Day Cultural Program"
    },
    {
      id: 4,
      src: "/lovable-uploads/8b6977da-c966-4f3c-9d8e-3382d16e2f5d.png",
      alt: "Students in traditional attire with Indian flag in field",
      caption: "National Day Celebrations"
    },
    {
      id: 5,
      src: "/lovable-uploads/4e756796-77e7-4098-b6e7-b136c7a552fa.png",
      alt: "Student decorating for cultural event",
      caption: "Cultural Event Preparations"
    },
    {
      id: 6,
      src: "/lovable-uploads/771b4218-6a2a-4eff-a7e4-a5b8e4779fa9.png",
      alt: "Students lined up with Indian flags",
      caption: "School Assembly on Republic Day"
    }
  ];

  // Exhibition photos can go in a carousel
  return (
    <section id="gallery" className="py-16 bg-secondary/50">
      <Container>
        <ScrollReveal animation="fade-in">
          <SectionTitle
            overline="Our Memories"
            title="School Gallery"
            description="Experience the vibrant school life at New Era English School through our collection of memorable moments."
          />

          <Tabs
            defaultValue="photos"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="photos" className="flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  <span>Photos</span>
                </TabsTrigger>
                <TabsTrigger value="carousel" className="flex items-center gap-2">
                  <ImageOff className="w-4 h-4" />
                  <span>Slideshow</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="photos" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {photos.map((photo) => (
                  <ScrollReveal 
                    key={photo.id} 
                    animation="scale" 
                    delay={photo.id * 100}
                    className="group"
                  >
                    <div className="overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="relative">
                        <AspectRatio ratio={4/3}>
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          />
                        </AspectRatio>
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-center text-muted-foreground">{photo.caption}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carousel">
              <ScrollReveal animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <Carousel opts={{ loop: true }}>
                    <CarouselContent>
                      {photos.map((photo) => (
                        <CarouselItem key={photo.id}>
                          <div className="p-1">
                            <div className="overflow-hidden bg-white rounded-lg shadow-md">
                              <AspectRatio ratio={16/9}>
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  className="object-cover w-full h-full"
                                />
                              </AspectRatio>
                              <div className="p-4">
                                <h3 className="font-medium text-center">{photo.caption}</h3>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center mt-4">
                      <CarouselPrevious className="relative static left-0 right-auto mr-2 translate-y-0" />
                      <CarouselNext className="relative static right-0 left-auto ml-2 translate-y-0" />
                    </div>
                  </Carousel>
                </div>
              </ScrollReveal>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default Gallery;
