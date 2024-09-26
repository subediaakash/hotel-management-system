import BookingForm from "../../components/GuestComponents/BookingForm";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import MainHotelCard from "../../components/GuestComponents/MainhotelCard";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function HotelSearch() {
  const stateLocation = useLocation();
  const { initialDateRange, initialGuest, initialLocation } =
    stateLocation.state || {};
  const [bookingData, setBookingData] = useState({
    location: "Tokyo",
    dateRange: {
      from: new Date(2024, 5, 15), // June 15, 2024
      to: new Date(2024, 5, 22), // June 22, 2024
    },
    guests: {
      adults: 2,
      rooms: 1,
    },
  });
  return (
    <div>
      <div className="flex justify-center items-center">
        <GuestNavbar />
      </div>
      <div className="max-w-6xl">
        <BookingForm
          initialLocation={initialLocation}
          initialDateRange={initialDateRange}
          initialGuests={initialGuest}
        />
      </div>
      <div className="HotelCards p-2 ">
        <MainHotelCard
          hotelImage="beach-advertisement.avif"
          hotelAddress="Kuwait City"
          hotelPrice={2500}
          hotelFeatures={["Meal Included", "Swimming"]}
          hotelRating={3}
          hotelName="The Taj"
          hotelDiscountedPrice={1000}
        />
        <MainHotelCard
          hotelImage="qatar.jpg"
          hotelAddress="Bangalore"
          hotelPrice={2500}
          hotelFeatures={["Meal Included", "Swimming", "Dinner"]}
          hotelRating={3}
          hotelName="The Taj"
          hotelDiscountedPrice={1000}
        />
      </div>
    </div>
  );
}

export default HotelSearch;
