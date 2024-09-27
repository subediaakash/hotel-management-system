import React from "react";
import { useLocation } from "react-router-dom";
import BookingSummary from "../../components/GuestComponents/BookingSummary";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import HotelPage from "../../components/GuestComponents/HotelPage";

function HotelBookingPage() {
  const location = useLocation();
  const {
    hotelImage = "",
    hotelName = "",
    hotelAddress = "",
    isRefundable = false,
    hotelRating = 0,
    hotelFeatures = [],
    hotelPrice = 0,
    hotelDiscountedPrice = 0,
    guestDetails,
    dateRange = { from: "", to: "" },
    totalDays,
  } = location.state || {};

  return (
    <div>
      <GuestNavbar />
      <div className="flex items-center my-auto justify-center flex-wrap">
        <HotelPage
          image={hotelImage}
          hotelRating={hotelRating}
          hotelAddress={hotelAddress}
          hotelName={hotelName}
          hotelFeatures={hotelFeatures}
          guestDetails={guestDetails}
          perDayPrice={hotelPrice}
          discountedRate={hotelDiscountedPrice}
          totalDays={totalDays}
          isRefundable={isRefundable}
        />
        <BookingSummary
          totalDays={totalDays}
          dateRange={dateRange}
          numberOfAdults={guestDetails.adults}
          numberOfRooms={guestDetails.rooms}
          hotelPrice={hotelPrice}
          hotelDiscountedPrice={hotelDiscountedPrice}
        />
      </div>
    </div>
  );
}

export default HotelBookingPage;