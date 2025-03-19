
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

  // Updated photos with colorful categories
  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/ffac1b73-e0bb-4170-8af0-9b7161bf7490.png",
      alt: "School celebration with deity decoration",
      caption: "Annual Saraswati Puja Celebration",
      category: "cultural",
      color: "bg-purple-100 border-purple-400" 
    },
    {
      id: 2,
      src: "/lovable-uploads/11143778-3f10-4124-aa4c-af37c4891126.png",
      alt: "Students performing with Indian flag",
      caption: "Republic Day Performance",
      category: "national",
      color: "bg-orange-100 border-orange-400"
    },
    {
      id: 3,
      src: "/lovable-uploads/5ca3cd84-8db5-4c8b-9e08-b75d87227c93.png",
      alt: "Students in traditional attire with Indian flag",
      caption: "Independence Day Cultural Program",
      category: "national",
      color: "bg-green-100 border-green-400"
    },
    {
      id: 4,
      src: "/lovable-uploads/8b6977da-c966-4f3c-9d8e-3382d16e2f5d.png",
      alt: "Students in traditional attire with Indian flag in field",
      caption: "National Day Celebrations",
      category: "national",
      color: "bg-blue-100 border-blue-400"
    },
    {
      id: 5,
      src: "/lovable-uploads/4e756796-77e7-4098-b6e7-b136c7a552fa.png",
      alt: "Student decorating for cultural event",
      caption: "Cultural Event Preparations",
      category: "cultural",
      color: "bg-pink-100 border-pink-400"
    },
    {
      id: 6,
      src: "/lovable-uploads/771b4218-6a2a-4eff-a7e4-a5b8e4779fa9.png",
      alt: "Students lined up with Indian flags",
      caption: "School Assembly on Republic Day",
      category: "national",
      color: "bg-yellow-100 border-yellow-400"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/30 dark:to-blue-900/20">
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
              <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-purple-100 dark:bg-purple-900/30">
                <TabsTrigger 
                  value="photos" 
                  className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-purple-800 data-[state=active]:text-purple-700 dark:data-[state=active]:text-white transition-all duration-300"
                >
                  <Image className="w-4 h-4" />
                  <span>Photos</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="carousel" 
                  className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-purple-800 data-[state=active]:text-purple-700 dark:data-[state=active]:text-white transition-all duration-300"
                >
                  <ImageOff className="w-4 h-4" />
                  <span>Slideshow</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="photos" className="space-y-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {photos.map((photo) => (
                  <ScrollReveal 
                    key={photo.id} 
                    animation="scale" 
                    delay={photo.id * 100}
                    className="group"
                  >
                    <div 
                      className={`overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl border-2 ${photo.color} hover:-translate-y-2`}
                    >
                      <div className="relative">
                        <AspectRatio ratio={4/3}>
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-primary/80 rounded-full mb-1">
                                {photo.category === 'national' ? 'National Event' : 'Cultural Event'}
                              </span>
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-center">{photo.caption}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carousel">
              <ScrollReveal animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <Carousel 
                    opts={{ 
                      loop: true,
                      duration: 50 
                    }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-md dark:from-purple-900/20 dark:to-pink-900/20"
                  >
                    <CarouselContent>
                      {photos.map((photo) => (
                        <CarouselItem key={photo.id} className="px-2">
                          <div className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-2 ${photo.color}`}>
                            <AspectRatio ratio={16/9}>
                              <img
                                src={photo.src}
                                alt={photo.alt}
                                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                              />
                            </AspectRatio>
                            <div className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                              <h3 className="font-medium text-center">{photo.caption}</h3>
                              <p className="text-xs text-center mt-1 text-muted-foreground">
                                {photo.category === 'national' ? 'National Event' : 'Cultural Event'}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center mt-6">
                      <CarouselPrevious className="relative static left-0 right-auto mr-4 translate-y-0 bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300 hover:border-purple-400 dark:bg-purple-900/40 dark:hover:bg-purple-800/60" />
                      <CarouselNext className="relative static right-0 left-auto ml-4 translate-y-0 bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300 hover:border-purple-400 dark:bg-purple-900/40 dark:hover:bg-purple-800/60" />
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
