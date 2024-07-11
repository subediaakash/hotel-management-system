import AmountPaid from "../../components/GuestComponents/AmountPaid";
import GuestInfo from "../../components/GuestComponents/GuestInfo";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import GuestPassportDetails from "../../components/GuestComponents/GuestPassportDetails";
import GuestServices from "../../components/GuestComponents/GuestServices";
import GuestStatus from "../../components/GuestComponents/GuestStatus";

function MainGuestPage() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#fcfcfa]">
      <div className="font-Roboto">
        <div className="h-[10vh]">
          <GuestNavbar />
        </div>
        <div className="h-[80vh] mt-8 ">
          <GuestStatus />
          <div className="flex  gap-3 mt-4   ">
            <GuestInfo />
            <GuestPassportDetails />
          </div>
          <GuestServices />
          <AmountPaid />
        </div>
      </div>
    </div>
  );
}

export default MainGuestPage;
