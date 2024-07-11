function GuestNavbar() {
  return (
    <div className="h-[9vh] flex items-center w-[55vw] justify-between">
      <ul className="flex gap-5 items-center align-middle font-medium">
        <li className="relative group cursor-pointer">
          <span className="hover:text-red-500">Guest Info</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="hover:text-red-500">Bookings</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="hover:text-red-500">Orders</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="hover:text-red-500">Deals</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="hover:text-red-500">Payments</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="hover:text-red-500">Conversations</span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
      </ul>
      <img src="./logo.png" className="w-28" alt="" />
    </div>
  );
}

export default GuestNavbar;
