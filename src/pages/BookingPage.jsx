//need to work on this page

import React, { useState } from "react";

const BookingPage = () => {
  const [vehicleId, setVehicleId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingData = { vehicleId, startDate, endDate };
    console.log("Booking Data:", bookingData);
    alert("Booking submitted! (Connect this to your backend API)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-400 to-blue-500">
      {/* Booking Container */}
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg transform transition duration-500 hover:scale-105">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mb-6">
          Book Your Ride
        </h2>
        {/* Form */}
        <form onSubmit={handleBooking}>
          {/* Vehicle ID Input */}
          <div className="mb-6">
            <label
              className="block text-gray-800 font-semibold text-lg mb-2"
              htmlFor="vehicleId"
            >
              Vehicle ID
            </label>
            <input
              type="text"
              id="vehicleId"
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-500"
              placeholder="Enter Vehicle ID"
              required
            />
          </div>

          {/* Start Date Input */}
          <div className="mb-6">
            <label
              className="block text-gray-800 font-semibold text-lg mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
              required
            />
          </div>

          {/* End Date Input */}
          <div className="mb-6">
            <label
              className="block text-gray-800 font-semibold text-lg mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
