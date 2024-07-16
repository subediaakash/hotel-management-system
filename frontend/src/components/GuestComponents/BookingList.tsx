function BookingList() {
  return (
    <div className="w-[55vw] font-Roboto shadow-lg mt-2 hover:shadow-xl flex justify-between">
      <div className=" w-[30vw] mt-3">
        <p className="p-3 text-slate-500">Upcoming Bookings</p>
        <div className="w-[60%] flex flex-col gap-2 p-3 ">
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Date :</span>
            <span className="w-2/3">15th August 2024</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Destination :</span>
            <span className="w-2/3">Agra</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Type :</span>
            <span className="w-2/3">Regular Guest</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Status :</span>
            <span className="w-2/3">Confirmed</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Room No. :</span>
            <span className="w-2/3">305</span>
          </p>
          <p className="flex ">
            <button className="border border-[#af2626] bg-[#af2626] text-white font-medium p-2 rounded-md ">
              Cancel Booking
            </button>
          </p>
        </div>
        <div className="w-[60%] flex flex-col gap-2 p-3 ">
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Date :</span>
            <span className="w-2/3">15th August 2024</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Destination :</span>
            <span className="w-2/3">Agra</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Type :</span>
            <span className="w-2/3">Regular Guest</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Status :</span>
            <span className="w-2/3">Confirmed</span>
          </p>
          <p className="flex justify-between">
            <span className="w-1/3 font-medium">Room No. :</span>
            <span className="w-2/3">305</span>
          </p>
          <p className="flex ">
            <button className="border border-[#af2626] bg-[#af2626] text-white font-medium p-2 rounded-md ">
              Cancel Booking
            </button>
          </p>
        </div>
      </div>
      <div className="p-2">
        <img src="./hotelholiday.jpg " className="h-fit w-[25vw]" alt="" />
      </div>
    </div>
  );
}

export default BookingList;