import DealCard from "../../components/GuestComponents/DealCard";
import { CarouselSpacing } from "../../components/GuestComponents/TempComp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
function Temp() {
  return (
    // <div className="flex">
    //   <Carousel className="max-w-5xl ">
    //     <CarouselPrevious />

    //     <CarouselContent className="">
    //       {Array.from({ length: 5 }).map((_, index) => (
    //         <CarouselItem
    //           key={index}
    //           className="pl-1 md:basis-1/2 lg:basis-1/3"
    //         >
    //           <div className="p-1">
    //             <DealCard hotelImage={"./Bali.jpg"} />
    //           </div>
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselNext />
    //   </Carousel>
    // </div>
    <CarouselSpacing />
  );
}

export default Temp;
