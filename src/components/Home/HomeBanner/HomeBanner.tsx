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
import Container from "@/SharedComponent/Container/Container";

const HomeBanner = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }) // Delay of 3 seconds
  );

  const data = [
    '/banner/banner1.jpg',
    '/banner/banner2.jpg',
    '/banner/banner3.jpg',
    '/banner/banner4.jpg',
    '/banner/banner5.jpg',
    '/banner/banner6.jpg',
    '/banner/banner7.jpg',
  ];

  return (
<div className="mt-20 md:mt-28 px-4 p-1 w-full bg-gradient-to-r from-gray-500 via-orange-100 to-gray-500 
border-b-[20px] 
border-gray-100 border-t-[20px]">
  <Container>
    <Carousel
      plugins={[autoplay.current]}
      className="w-full group relative"
      onMouseEnter={autoplay.current.stop} // Pause autoplay on hover
      onMouseLeave={autoplay.current.reset} // Resume autoplay on mouse leave
      opts={{
        align: "start",
        slidesToScroll: 3,
      }}
    >
      <CarouselContent>
        {data?.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 group/card">
            <div className="p-2">
              <Card className="w-full h-[300px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg border border-gray-200 transition-all duration-500 ease-in-out transform hover:scale-[1.05] hover:shadow-2xl">
                <CardContent className="relative w-full h-full p-0">
                  <img
                    className="h-full w-full object-fill rounded-xl transition-transform border-gray-500 border-[2px] duration-500 ease-in-out"
                    src={img}
                    alt={`Banner ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows - Smooth Appearance on Hover */}
      <CarouselPrevious className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full transition-opacity duration-300 ease-in-out" />
      <CarouselNext className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full transition-opacity duration-300 ease-in-out" />
    </Carousel>
  </Container>
</div>

  );
};

export default HomeBanner;
