import BookingList from "../../components/GuestComponents/BookingList";
import GuestFooter from "../../components/GuestComponents/GuestFooter";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import NewBookingAdv from "../../components/GuestComponents/NewBookingAdv";
import NoBookingsFound from "../../components/GuestComponents/NoBookingsFound";

export default function Bookings() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col ">
        <div>
          <GuestNavbar />
          <BookingList />
          <NewBookingAdv />
          {/* <NoBookingsFound /> */}
        </div>
      </div>
      <GuestFooter />
    </div>
  );
}
