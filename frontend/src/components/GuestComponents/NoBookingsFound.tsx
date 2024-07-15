export default function NoBookingsFound() {
  return (
    <div className="flex gap-4 items-center p-4 border border-red-700">
      <div className="flex flex-col gap-5">
        <p className="text-3xl font-semibold items-center justify-center">
          No Bookings found !
        </p>
        <p>
          <button className="p-3 rounded-md bg-[#af2626] text-white font-bold">
            Book Now{" "}
          </button>
        </p>
      </div>
      <div>
        <img src="./noBookings.jpg" alt="" />
      </div>
    </div>
  );
}
