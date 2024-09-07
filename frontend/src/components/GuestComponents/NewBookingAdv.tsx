import { useNavigate } from "react-router-dom";

function NewBookingAdv() {
  const navigate = useNavigate();
  return (
    <div className="w-[55vw] font-Roboto p-3 border  shadow-lg mt-2 hover:shadow-xl">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-medium font-Roboto">
          Want to continue the journey of comfort with the villas?
        </p>

        <p className=" text-xl font-medium font-Roboto">Book Righ away </p>
        <p className="flex ">
          <button
            onClick={() => {
              navigate("/book");
            }}
            className="p-2 border  text-white  bg-[#af2626] rounded-lg"
          >
            Book Now
          </button>
        </p>
      </div>
    </div>
  );
}

export default NewBookingAdv;
