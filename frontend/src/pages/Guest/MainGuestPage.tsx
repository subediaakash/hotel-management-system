import AmountPaid from "../../components/GuestComponents/AmountPaid";
import BookingForm from "../../components/GuestComponents/BookingForm";
import BookingPortal from "../../components/GuestComponents/BookingPortal";
import GuestInfo from "../../components/GuestComponents/GuestInfo";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import GuestServices from "../../components/GuestComponents/GuestServices";
import GuestStatus from "../../components/GuestComponents/GuestStatus";
import GuestStay from "../../components/GuestComponents/GuestStay";
import Temp from "./Temp";

function MainGuestPage() {
  return (
    <div className="flex justify-center gap-2  lg:items-center flex-col bg-[#fcfcfa]">
      <div className="font-Roboto">
        <div className="h-[10vh] flex items-center justify-center">
          <GuestNavbar />
        </div>

        <div className="min-h-52   bg-cover bg-no-repeat flex flex-col justify-center items-start p-2">
          <BookingForm />
        </div>
        <div className="flex justify-center items-center">
          <Temp />
        </div>
        <div>
          <GuestStay image="./dubai.jpg" cityName="Dubai" country="UAE" />
        </div>
      </div>
    </div>
  );
}

export default MainGuestPage;
