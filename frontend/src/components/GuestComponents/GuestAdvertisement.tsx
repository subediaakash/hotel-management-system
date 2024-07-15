import { useNavigate } from "react-router-dom";
function GuestAdvertisement() {
  const navigate = useNavigate();
  return (
    <div className="bg-red-900 text-white w-[55vw] p-5">
      <div className="flex items-center text-xl ">
        <h1 className="flex font-semibold">
          There are amazing offers on <span> The villas</span>
        </h1>
      </div>
      <div className="flex justify-between p-2 items-center">
        <div>
          <p className="">The countries where we are avaliable :</p>
          <div className="font-semibold">
            <p>Dubai</p>
            <p>Maldives</p>
            <p>Qatar</p>
            <p>India</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div>
          <p>Get the special deals right away</p>
          <p className="flex items-center justify-center mt-2">
            <button
              className="border border-white p-2 font-semibold hover:opacity-35 "
              onClick={(e) => {
                e.preventDefault();
                navigate("/deals");
              }}
            >
              DEALS
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuestAdvertisement;
