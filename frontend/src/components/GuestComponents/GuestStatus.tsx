import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function GuestStatus() {
  const fetchGuestInfo = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    const response = await axios.get("http://localhost:5000/api/guest/info", {
      headers: {
        authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.guestById);

    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["guestInfo"],
    queryFn: fetchGuestInfo,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading guest info: {error.message}</div>;
  }

  if (!data) {
    return <div>No guest data available</div>;
  }

  return (
    <div className="flex justify-between w-[55vw] items-center border rounded-lg bg-white py-4 px-2">
      <div className="flex items-center gap-3">
        <img src="./GuestProfile.jpg" className="w-16 rounded-3xl" alt="" />
        <div className="font-semibold text-[#af2626]">
          <p>{data.guestById.name}</p>
          <p>{data.guestById.address}</p>
        </div>
      </div>
      <div>
        <p className="bg-blue-400 font-bold text-white p-2 rounded-sm">
          Status : <span>Confirmed</span>
        </p>
      </div>
    </div>
  );
}

export default GuestStatus;
