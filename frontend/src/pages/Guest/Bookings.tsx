import BookingList from "../../components/GuestComponents/BookingList";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";

export default function Bookings() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col ">
        <div>
          <GuestNavbar />
          <BookingList />
        </div>
      </div>
    </div>
  );
}
