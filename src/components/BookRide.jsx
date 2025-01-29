import React, { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import blurImage from "../img/b2.jpg";
import { useNavigate } from "react-router-dom";

import sedan from "../img/sedan.jpg";
import suv from "../img/suv.jpg";
import hatchback from "../img/hatchback.jpg";
import sportbike from "../img/sportbike.jpg";
import cruiser from "../img/cruiser.jpg";
import scooter from "../img/scooter.jpg";
import roadbike from "../img/roadbike.jpg";
import mountainbike from "../img/mountainbike.jpg";
import hybridbike from "../img/hybridbike.jpg";

const VEHICLE_DATA = [
  { id: 1, name: "Sedan", type: "Car", price: "$30 per hour", image: sedan },
  { id: 2, name: "SUV", type: "Car", price: "$25 per hour", image: suv },
  { id: 3, name: "Hatchback", type: "Car", price: "$28 per hour", image: hatchback },
  { id: 4, name: "Sport Bike", type: "Bike", price: "$25 per hour", image: sportbike },
  { id: 5, name: "Cruiser", type: "Bike", price: "$25 per hour", image: cruiser },
  { id: 6, name: "Scooter", type: "Bike", price: "$25 per hour", image: scooter },
  { id: 7, name: "Roadbike", type: "Bicycle", price: "$20 per hour", image: roadbike },
  { id: 8, name: "MountainBike", type: "Bicycle", price: "$15 per hour", image: mountainbike },
  { id: 9, name: "HybridBike", type: "Bicycle", price: "$25 per hour", image: hybridbike },
];

const BookRide = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    city: "Pune",
    vehicleType: "Car",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const findVehicles = () => {
    const filteredVehicles = VEHICLE_DATA.filter(
      (vehicle) => vehicle.type === searchCriteria.vehicleType
    );
    setVehicles(filteredVehicles);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${blurImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-5xl font-extrabold mt-14 mb-4 animate-fade-in">
          <span className="text-yellow-400">Rental</span>Hub
        </h1>
        <p className="text-lg italic">"Customer safety is our Priority"</p>
        <h2 className="text-6xl font-bold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          ASSURED RENTALS
        </h2>
        <p className="text-lg mt-2 font-semibold">
          Rent from India's Largest Fleet of Vehicles, Trusted by Customers
        </p>

        {/* Booking Section */}
        <div className="mt-12 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-2xl w-full max-w-xl border border-white/30">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-6">
            Book Your Ride
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* City Selection */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">City</label>
              <div className="flex items-center space-x-2 bg-white rounded-lg p-2">
                <FaCity className="text-gray-600" />
                <select
                  name="city"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 outline-none"
                  value={searchCriteria.city}
                  onChange={handleChange}
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chh.Sambhajinagar">Chh. Sambhajinagar</option>
                </select>
              </div>
            </div>

            {/* Vehicle Type Selection */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">Vehicle Type</label>
              <select
                name="vehicleType"
                className="w-full px-4 py-2 rounded-md bg-white text-gray-800 outline-none"
                value={searchCriteria.vehicleType}
                onChange={handleChange}
              >
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Bicycle">Bicycle</option>
              </select>
            </div>
          </div>

          <button
            onClick={findVehicles}
            className="px-8 py-3 mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Find Vehicle
          </button>
        </div>

        {/* Vehicle Display Section */}
        {vehicles.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform border border-gray-200"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-blue-500">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.price}</p>
                <button
                  className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-all"
                  onClick={() => navigate("/user-booking-details")}
                >
                  Book Now 🚀
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookRide;
