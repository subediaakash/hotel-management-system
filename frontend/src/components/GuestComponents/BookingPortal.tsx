import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, MapPin } from "lucide-react";

const BookingPortal = () => {
  const [selectedStayType, setSelectedStayType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [bookingData, setBookingData] = useState({});

  const stayTypes = ["Individual", "Platinum", "LongTerm", "Vacation"];
  const locations = [
    "Kathmandu",
    "UnitedKingdom",
    "Melbourne",
    "Paris",
    "Kolkata",
    "Islamabad",
    "Moscow",
    "Bengaluru",
    "Sydney",
    "Delhi",
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!selectedLocation) {
      alert("Please select a location.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:5000/api/guest/hotels`,
        {
          params: { location: selectedLocation },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setHotels(response.data.data || []);
      setSelectedHotelId(null);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const submitBooking = async (e: any) => {
    e.preventDefault();

    if (!selectedHotelId) {
      alert("Please select a hotel to book.");
      return;
    }

    const newBookingData = {
      date: checkInDate,
      checkoutDate: checkOutDate,
      type: selectedStayType,
      location: selectedLocation,
      hotelId: selectedHotelId,
    };

    console.log("Booking Data:", newBookingData);
    setBookingData(newBookingData);

    if (bookingData) {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          "http://localhost:5000/api/guest/newbooking",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bookingData),
          }
        );
        console.log(response);

        if (!response.ok) {
          throw new Error("Failed to create booking");
        }

        const result = await response.json();
        console.log("Booking success:", result);
        alert("Booking successful!");
      } catch (error) {
        console.error("Booking error:", error);
        alert("Booking failed. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Hotel Booking Portal
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="checkInDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Check In
            </label>
            <div className="relative">
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="checkOutDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Check Out
            </label>
            <div className="relative">
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="stayType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Stay Type
          </label>
          <select
            id="stayType"
            name="stayType"
            value={selectedStayType}
            onChange={(e) => setSelectedStayType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Stay Type</option>
            {stayTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <div className="relative">
            <select
              id="location"
              name="location"
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setHotels([]);
              }}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <MapPin className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
        >
          Search Hotels
        </button>
      </form>
      {hotels.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">
            Available Hotels in {selectedLocation}:
          </h3>
          <ul className="space-y-2">
            {hotels.map((hotel: any) => (
              <li key={hotel.id} className="bg-gray-100 p-3 rounded-md">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`hotel-${hotel.id}`}
                    name="selectedHotel"
                    value={hotel.id}
                    checked={selectedHotelId === hotel.id}
                    onChange={() => setSelectedHotelId(hotel.id)}
                  />
                  <label htmlFor={`hotel-${hotel.id}`}>{hotel.name}</label>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={submitBooking}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Book Now
          </button>
        </div>
      )}

      {hotels.length === 0 && (
        <div className="mt-8 text-center text-red-600">
          No hotels available in this region.
        </div>
      )}
    </div>
  );
};

export default BookingPortal;
