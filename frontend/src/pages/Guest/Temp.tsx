import React from "react";
import MainhotelCard from "../../components/GuestComponents/MainhotelCard";

function Temp() {
  return (
    <div>
      <MainhotelCard
        hotelImage="beach-advertisement.avif"
        hotelAddress="Kuwait City"
        hotelPrice={2500}
        hotelFeatures={["Meal Included", "Swimming"]}
        hotelRating={3}
        hotelName="The Taj"
        hotelDiscountedPrice={1000}
      />
      <MainhotelCard
        hotelImage="qatar.jpg"
        hotelAddress="Bangalore"
        hotelPrice={2500}
        hotelFeatures={["Meal Included", "Swimming", "Dinner"]}
        hotelRating={3}
        hotelName="The Taj"
        hotelDiscountedPrice={1000}
      />
    </div>
  );
}

export default Temp;
