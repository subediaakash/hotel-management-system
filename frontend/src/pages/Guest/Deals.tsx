import GuestNavbar from "../../components/GuestComponents/GuestNavbar";
import LocationCard from "../../components/GuestComponents/LocationCard";

function Deals() {
  const dubaiDescription =
    "Get up to 50% discount on the visit to the Dubai trip. Villas will provide you with all the necessary accommodation facilities.";

  const baliDescription =
    "Bali will provide you with a wide range of beach views, and villas will provide you with your accommodation.";
  const kathmanduDescription =
    "The city of temples welcomes you with the world's highest peak on its crown, and villas shall make your stay easier.";

  const UnitedKingdomDescription =
    "Visit the country with a wide history , Villas shall help you explore each of the old history book ";

  return (
    <div className="flex justify-center items-center flex-col font-Roboto">
      <GuestNavbar />
      <div className="w-[55vw] grid grid-cols-2 gap-x-0 gap-y-6">
        <LocationCard
          locationImage="./dubai.jpg"
          locationTitle="Enjoy the hospitality of Dubai"
          locationDescription={dubaiDescription}
        />
        <LocationCard
          locationImage="./Bali.jpg"
          locationTitle="Beach with Bali"
          locationDescription={baliDescription}
        />
        <LocationCard
          locationImage="./kathmandu.jpg"
          locationTitle="Worship Kathmandu"
          locationDescription={kathmanduDescription}
        />
        <LocationCard
          locationImage="./unitedKingdom.jpg"
          locationTitle="The country of universities, UK"
          locationDescription={UnitedKingdomDescription}
        />
      </div>
    </div>
  );
}

export default Deals;
