//not in used

import { useState } from "react";
import { FaCity } from "react-icons/fa";

function BookRideForm() {
  const [searchCriteria, setSearchCriteria] = useState({
    city: "",
    bookingType: "Daily",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const findVehicles = () => {
    if (!searchCriteria.city) {
      alert("Please select a city.");
      return;
    }
    // Logic to find vehicles goes here
    console.log("Searching for vehicles...");
  };

  return (
    <div className="bg-white bg-opacity-90 text-gray-900 p-6 rounded-lg mt-10 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Book Your Ride</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">City</label>
          <div className="flex items-center space-x-2">
            <FaCity />
            <select
              name="city"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              value={searchCriteria.city}
              onChange={handleChange}
            >
              <option value="" disabled>Select City</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chh.Sambhajinagar">Chh.Sambhajinagar</option>
            </select>
          </div>
        </div>

        {/* Other fields go here */}

        <div className="mt-6 text-center">
          <button
            onClick={findVehicles}
            className={`px-6 py-3 font-bold rounded-md transition ${
              !searchCriteria.city
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            disabled={!searchCriteria.city}
          >
            Find Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookRideForm;
