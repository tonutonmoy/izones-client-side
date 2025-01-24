'use client';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeBanner = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }) // Delay of 5 seconds
  );

  const data = [
    '/banner/iZonesBanner.jpg',
    // 'https://images.pexels.com/photos/27927887/pexels-photo-27927887/free-photo-of-a-large-square-with-people-walking-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <div >
      <Carousel
        plugins={[autoplay.current]}
        className="w-full group" // Ensure 'group' is correctly added to the carousel wrapper
        onMouseEnter={autoplay.current.stop} // Pause autoplay on hover
        onMouseLeave={autoplay.current.reset} // Resume autoplay on mouse leave
      >
        <CarouselContent>
          {data?.map((img, index) => (
            <CarouselItem key={index} className="w-[50%]">
              <div className="p-1">
                <Card className="w-full h-[300px]  lg:h-[500px]">
                  <CardContent className="relative w-full h-full p-0">
                    <img
                      className="h-full w-full object-fill p-1 rounded-xl"
                      src={img}
                      alt=""
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Use group-hover for navigation buttons */}
        <CarouselPrevious className="hidden group-hover:flex" />
        <CarouselNext className="hidden group-hover:flex" />
      </Carousel>
    </div>
  );
};

export default HomeBanner;
