import { useQuery } from "@tanstack/react-query";

function GuestBalance() {
  const fetchGuestInfo = async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch("http://localhost:3000/info", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["guestInfo"],
    queryFn: fetchGuestInfo,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex justify-between w-[55vw] items-center border rounded-lg bg-white py-4 px-2">
      <div className="flex items-center gap-3">
        <img
          src="./GuestProfile.jpg"
          className="w-16 rounded-3xl"
          alt="Guest Profile"
        />
        <div className="font-semibold text-[#af2626] ">
          <p>{data.name}</p>
          <p>{data.address}</p>
        </div>
      </div>
      <div>
        <p className="bg-blue-400 font-bold text-white p-2 rounded-sm">
          Guest Balance : <span>{2500}</span> {/* Corrected here */}
        </p>
      </div>
    </div>
  );
}

export default GuestBalance;
