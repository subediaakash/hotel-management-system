import BookingSummary from "../../components/GuestComponents/BookingSummary";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import HotelPage from "../../components/GuestComponents/HotelPage";

function Temp() {
  return (
    <div>
      <GuestNavbar />
      <div className="flex items-center my-auto justify-center flex-wrap">
        <HotelPage />
        <BookingSummary numberOfAdults={2} />
      </div>
    </div>
  );
}

export default Temp;
