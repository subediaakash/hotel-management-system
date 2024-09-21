import { useRef } from "react";
import BookingForm from "../../components/GuestComponents/BookingForm";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import GuestStay from "../../components/GuestComponents/GuestStay";

function MainGuestPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center gap-2  lg:items-center flex-col bg-[#fcfcfa]">
      <div className="font-Roboto">
        <div className="h-[10vh] flex items-center justify-center">
          <GuestNavbar />
        </div>

        <div className="min-h-52 bg-cover bg-no-repeat flex flex-col justify-center items-start p-2">
          <BookingForm />
        </div>
        <div className="outer-div p-3 flex justify-center items-center flex-col ">
          <p className="font-bold lg:text-xl text-base font-Oswald ">
            EXPLORE STAYS IN TRENDING LOCATIONS
          </p>
          <div className="relative max-w-4xl p-3">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
              onClick={scrollLeft}
            >
              &#8592;
            </button>

            <div
              ref={carouselRef}
              className="carousel-comp p-3 flex max-w-4xl overflow-x-auto gap-2 scrollbar-hide"
            >
              <GuestStay image="./dubai.jpg" cityName="Dubai" country="UAE" />
              <GuestStay
                image="./Bali.jpg"
                cityName="Bali"
                country="Indonesia"
              />
              <GuestStay
                image="./kathmandu.jpg"
                cityName="kathmandu"
                country="Nepal"
              />
              <GuestStay image="./dubai.jpg" cityName="Dubai" country="UAE" />
              <GuestStay image="./dubai.jpg" cityName="Dubai" country="UAE" />
            </div>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
              onClick={scrollRight}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainGuestPage;
