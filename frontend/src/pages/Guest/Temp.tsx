import React from "react";
import DealCard from "../../components/GuestComponents/DealCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

function Temp() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
            >
              <div className="p-1">
                <DealCard hotelImage={"./Bali.jpg"} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2">
          <CarouselPrevious className="relative left-4" />
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2">
          <CarouselNext className="relative right-4" />
        </div>
      </Carousel>
    </div>
  );
}

export default Temp;
