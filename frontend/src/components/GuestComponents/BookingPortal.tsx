import { useState } from "react";

function BookingPortal() {
  const [selectedStayType, setSelectedStayType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [hotels, setHotels] = useState([]);

  const handleStayTypeChange = (e: any) => {
    setSelectedStayType(e.target.value);
  };

  const handleLocationChange = (e: any) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/hotels?location=${selectedLocation}`);
      const data = await response.json();
      setHotels(data.hotels);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Enter the Date</label>
          <input type="date" id="date" name="date" />
        </div>

        <div>
          <label htmlFor="checkoutDate">Enter the Check Out</label>
          <input type="date" id="checkoutDate" name="checkoutDate" />
        </div>

        <div>
          <label>Stay Type</label>
          <div>
            <label>
              <input
                type="radio"
                name="stayType"
                value="Individual"
                checked={selectedStayType === "Individual"}
                onChange={handleStayTypeChange}
              />
              Individual
            </label>
            <label>
              <input
                type="radio"
                name="stayType"
                value="Platinum"
                checked={selectedStayType === "Platinum"}
                onChange={handleStayTypeChange}
              />
              Platinum
            </label>
            <label>
              <input
                type="radio"
                name="stayType"
                value="LongTerm"
                checked={selectedStayType === "LongTerm"}
                onChange={handleStayTypeChange}
              />
              LongTerm
            </label>
            <label>
              <input
                type="radio"
                name="stayType"
                value="Vacation"
                checked={selectedStayType === "Vacation"}
                onChange={handleStayTypeChange}
              />
              Vacation
            </label>
          </div>
        </div>

        <div>
          <label>Locations</label>
          <div>
            <label>
              <input
                type="radio"
                name="location"
                value="Kathmandu"
                checked={selectedLocation === "Kathmandu"}
                onChange={handleLocationChange}
              />
              Kathmandu
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="UnitedKingdom"
                checked={selectedLocation === "UnitedKingdom"}
                onChange={handleLocationChange}
              />
              United Kingdom
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Melbourne"
                checked={selectedLocation === "Melbourne"}
                onChange={handleLocationChange}
              />
              Melbourne
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Paris"
                checked={selectedLocation === "Paris"}
                onChange={handleLocationChange}
              />
              Paris
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Kolkata"
                checked={selectedLocation === "Kolkata"}
                onChange={handleLocationChange}
              />
              Kolkata
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Islamabad"
                checked={selectedLocation === "Islamabad"}
                onChange={handleLocationChange}
              />
              Islamabad
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Moscow"
                checked={selectedLocation === "Moscow"}
                onChange={handleLocationChange}
              />
              Moscow
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Bengaluru"
                checked={selectedLocation === "Bengaluru"}
                onChange={handleLocationChange}
              />
              Bengaluru
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Sydney"
                checked={selectedLocation === "Sydney"}
                onChange={handleLocationChange}
              />
              Sydney
            </label>
            <label>
              <input
                type="radio"
                name="location"
                value="Delhi"
                checked={selectedLocation === "Delhi"}
                onChange={handleLocationChange}
              />
              Delhi
            </label>
          </div>
        </div>

        <div>
          <button type="submit">Fetch Hotels</button>
        </div>
      </form>

      {hotels.length > 0 && (
        <div>
          <h3>Available Hotels in {selectedLocation}:</h3>
          <ul>
            {hotels.map((hotel: any) => (
              <li key={hotel.id}>{hotel.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookingPortal;
