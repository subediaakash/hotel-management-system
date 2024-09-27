import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
import BookingForm from "../../components/GuestComponents/BookingForm";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import MainHotelCardLoading from "../../components/loadingComponents/MainHotelCardLoading";
import MainHotelCard from "../../components/GuestComponents/MainhotelCard";

function HotelSearch() {
  const stateLocation = useLocation();
  const { initialDateRange, initialGuest, initialLocation } =
    stateLocation.state || {};
  const [bookingData, setBookingData] = useState({
    location: initialLocation,
    dateRange: initialDateRange,
    guests: initialGuest,
  });

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["listOfHotels", bookingData.location],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/api/guest/hotels?location=${bookingData.location}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.data;
    },
    enabled: !!bookingData.location,
  });

  const handleBookingSubmit = (formValues: any) => {
    setBookingData({
      location: formValues.location,
      dateRange: formValues.dateRange,
      guests: formValues.guests,
    });
    refetch();
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <GuestNavbar />
      </div>
      <div className="max-w-6xl">
        <BookingForm
          initialLocation={bookingData.location}
          initialDateRange={bookingData.dateRange}
          initialGuests={bookingData.guests}
          onSubmit={handleBookingSubmit}
        />
      </div>

      <div className="HotelCards p-2">
        {isPending && (
          <div>
            <MainHotelCardLoading />
          </div>
        )}
        {error && <div>No Hotels were found</div>}
        {data && data.length === 0 && <div>No hotels found in this area.</div>}
        {data &&
          data.map((hotel: any) => (
            <MainHotelCard
              key={hotel.id}
              hotelImage={hotel.hotelImage}
              hotelAddress={hotel.location}
              hotelPrice={1000}
              hotelFeatures={hotel.features}
              hotelRating={hotel.ratings}
              hotelName={hotel.name}
              hotelDiscountedPrice={500}
            />
          ))}
      </div>
    </div>
  );
}

export default HotelSearch;
