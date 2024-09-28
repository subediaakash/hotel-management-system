import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
function GuestNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex sm:flex-row items-center justify-between w-full p-4 mb-4 relative">
      <Link to={"/"}>
        <img src="./logo.png" className="w-28" alt="Logo" />
      </Link>

      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden sm:flex gap-5 items-center font-medium text-blue-500">
        <NavItem to="/bookings" label="Bookings" />
        <NavItem to="/profile" label="Profile" />
      </ul>

      {isOpen && (
        <ul className="flex flex-col gap-4 items-start font-medium text-blue-500 sm:hidden bg-white absolute top-full left-0 w-full p-4 z-50">
          <NavItem to="/bookings" label="Bookings" />
          <NavItem to="/profile" label="Profile" />
        </ul>
      )}
    </div>
  );
}

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <li className="w-full">
    <Link to={to} className="relative group cursor-pointer block w-full">
      <span className="hover:text-red-500">{label}</span>
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </Link>
  </li>
);

export default GuestNavbar;
