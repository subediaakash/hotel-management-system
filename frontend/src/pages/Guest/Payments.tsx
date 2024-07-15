import GuestAdvertisement from "../../components/GuestComponents/GuestAdvertisement";
import GuestBalance from "../../components/GuestComponents/GuestBalance";
import GuestFooter from "../../components/GuestComponents/GuestFooter";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import ServicesBill from "../../components/GuestComponents/ServicesBill";

function Payments() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <GuestNavbar />
        <GuestBalance />
        <ServicesBill />
        <GuestAdvertisement />
        <GuestFooter />
      </div>
    </div>
  );
}

export default Payments;
