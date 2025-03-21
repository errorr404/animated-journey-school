
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Container from "@/components/ui/container";
import { Calendar, Pin, FileText, Image, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define notice types for our noticeboard
type NoticeType = "text" | "image";

interface Notice {
  id: string;
  title: string;
  content: string;
  type: NoticeType;
  date: string;
}

const Noticeboard = () => {
  // State for notices
  const [notices, setNotices] = useState<Notice[]>(() => {
    const savedNotices = localStorage.getItem('schoolNotices');
    return savedNotices ? JSON.parse(savedNotices) : [
      {
        id: '1',
        title: 'Annual Day Celebration',
        content: 'Our Annual Day will be celebrated on 15th December 2023. All parents are cordially invited!',
        type: 'text',
        date: '2023-11-30'
      },
      {
        id: '2',
        title: 'School Picnic',
        content: '/assets/placeholder.svg',
        type: 'image',
        date: '2023-12-01'
      },
      {
        id: '3',
        title: 'Holiday Notice',
        content: 'The school will remain closed from 25th December to 1st January for winter break.',
        type: 'text',
        date: '2023-12-05'
      }
    ];
  });

  // State for modal
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  // Save notices to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('schoolNotices', JSON.stringify(notices));
  }, [notices]);

  // Handle notice click to open modal
  const handleNoticeClick = (notice: Notice) => {
    setSelectedNotice(notice);
  };

  // Only display the most recent 3 notices
  const recentNotices = notices.slice(0, 3);

  return (
    <section id="noticeboard" className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-rounded text-primary mb-4">
            School Noticeboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important notices from our school.
          </p>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNotices.map((notice) => (
            <Card 
              key={notice.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-primary/20 hover:border-primary cursor-pointer bg-white"
              onClick={() => handleNoticeClick(notice)}
            >
              <div className="h-8 bg-primary flex items-center px-4">
                <span className="text-white font-medium truncate">{notice.date}</span>
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="font-rounded text-xl text-primary">
                    {notice.title}
                  </CardTitle>
                  {notice.type === 'text' ? 
                    <FileText className="h-5 w-5 text-primary" /> : 
                    <Image className="h-5 w-5 text-primary" />
                  }
                </div>
                {notice.type === 'text' ? (
                  <CardDescription className="line-clamp-3 text-foreground/80 font-handwritten text-lg">
                    {notice.content}
                  </CardDescription>
                ) : (
                  <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                    <img 
                      src={notice.content} 
                      alt={notice.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter className="bg-gray-50 px-5 py-3 flex justify-between">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" /> {notice.date}
                </div>
                <div className="flex items-center text-primary">
                  <Pin className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* View All Notices Button */}
        <div className="flex justify-center mt-10">
          <Link to="/notices">
            <Button className="bg-primary hover:bg-primary/90 rounded-full font-handwritten text-lg px-8 py-6">
              View All Notices <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Notice Detail Modal */}
        <Dialog open={!!selectedNotice} onOpenChange={(open) => !open && setSelectedNotice(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-rounded text-primary">
                {selectedNotice?.title}
              </DialogTitle>
              <div className="flex items-center text-muted-foreground mt-2 text-sm">
                <Calendar className="h-4 w-4 mr-1" /> Posted on: {selectedNotice?.date}
              </div>
            </DialogHeader>
            
            <div className="mt-4">
              {selectedNotice?.type === 'text' ? (
                <div className="prose prose-blue max-w-none font-handwritten text-xl leading-relaxed">
                  {selectedNotice?.content}
                </div>
              ) : (
                <div className="flex justify-center">
                  <img
                    src={selectedNotice?.content}
                    alt={selectedNotice?.title}
                    className="max-h-[60vh] object-contain rounded-md border border-gray-200"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
};

export default Noticeboard;
