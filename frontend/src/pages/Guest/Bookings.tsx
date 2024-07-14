import BookingList from "../../components/GuestComponents/BookingList";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import NewBookingAdv from "../../components/GuestComponents/NewBookingAdv";

export default function Bookings() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <GuestNavbar />
      </div>
      <div>
        <BookingList />
      </div>
      <div>
        <NewBookingAdv />
      </div>
    </div>
  );
}
