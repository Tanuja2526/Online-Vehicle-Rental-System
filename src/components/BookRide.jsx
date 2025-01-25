import React, { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import blurImage from "../img/b2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import sedan from "../img/sedan.jpg";
import suv from "../img/suv.jpg";
import hatchback from "../img/hatchback.jpg";

import sportbike from "../img/sportbike.jpg";
import cruiser from "../img/cruiser.jpg";
import scooter from "../img/scooter.jpg";

import roadbike from "../img/roadbike.jpg";
import mountainbike from "../img/mountainbike.jpg";
import hybridbike from "../img/hybridbike.jpg"

const VEHICLE_DATA = [
  { id: 1, name: "Sedan", type: "Car", price: "$30 per hour", image: sedan },
  { id: 2, name: "SUV", type: "Car", price: "$25 per hour", image: suv },
  { id: 3, name: "Hatchback", type: "Car", price: "$28 per hour", image: hatchback },
  { id: 4, name: "Sport Bike", type: "Bike", price: "$25 per hour", image: sportbike },
  { id: 5, name: "Cruiser", type: "Bike", price: "$25 per hour", image: cruiser },
  { id: 6, name: "Scooter", type: "Bike", price: "$25 per hour", image: scooter },
  { id: 4, name: "Roadbike", type: "Bicycle", price: "$20 per hour", image: roadbike },
  { id: 5, name: "MountainBike", type: "Bicycle", price: "$15 per hour", image: mountainbike },
  { id: 6, name: "HybridBike", type: "Bicycle", price: "$25 per hour", image: hybridbike },

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
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${blurImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-white text-center p-8">
  <h1 className="text-4xl font-extrabold mb-2 mt-14">
    <span className="text-blue-400">Rental</span>Hub
  </h1>
  <p className="text-sm italic">Customer safety is our Priority..</p>

  <h2 className="text-5xl font-bold mt-8">ASSURED RENTALS</h2>
  <p className="text-lg mt-4">
    Rent from India's Largest Fleet of Vehicles, Trusted by Customers
  </p>


        <div className="bg-white bg-opacity-90 text-gray-800 p-6 rounded-lg mt-10 shadow-xl">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Book Your Ride
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">City</label>
              <div className="flex items-center space-x-2">
                <FaCity />
                <select
                  name="city"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-purple-400"
                  value={searchCriteria.city}
                  onChange={handleChange}
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chh.Sambhajinagar"></option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Vehicle Type</label>
              <select
                name="vehicleType"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-purple-400"
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
            className="px-6 py-3 mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Find Vehicle
          </button>
        </div>

        {vehicles.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-blue-500">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.price}</p>
                <button
                  className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={() => navigate("/user-booking-details")}
                >
                  Book Now
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
