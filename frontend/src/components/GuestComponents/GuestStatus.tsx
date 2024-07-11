function GuestStatus() {
  return (
    <div className="flex justify-between w-[55vw] items-center  border rounded-lg bg-white py-4 px-2">
      <div className="flex items-center gap-3">
        <img src="./GuestProfile.jpg" className="w-16 rounded-3xl" alt="" />
        <div className="font-semibold text-[#af2626] ">
          <p>Ram Sharma</p>
          <p>UttarPradesh , India</p>
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
