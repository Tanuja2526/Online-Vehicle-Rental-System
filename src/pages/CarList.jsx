import React from "react";
import { Link } from "react-router-dom";

import sedan from "../img/sedan.jpg";
import suv from "../img/suv.jpg";
import hatchback from "../img/hatchback.jpg";

import roadbike from "../img/roadbike.jpg";
import mountainbike from "../img/mountainbike.jpg";
import hybridbike from "../img/hybridbike.jpg";

import sportbike from "../img/sportbike.jpg";
import cruiser from "../img/cruiser.jpg";
import scooter from "../img/scooter.jpg";
const PopularCars = () => {
  const cars = [
    { id: 1, name: "Sedan", price: "$30 per hour", image: sedan},
    { id: 2, name: "SUV", price: "$25 per hour", image: suv },
    { id: 3, name: "Hatchback", price: "$28 per hour", image: hatchback },

    { id: 4, name: "Road Bike", price: "$35 per hour", image: roadbike,},
    { id: 5, name: "Mountain Bike", price: "$30 per hour", image: mountainbike },
    { id: 6, name: "Hybridbike", price: "$25 per hour", image: hybridbike },

    { id: 7, name: "Sport Bike", price: "$25 per hour", image: sportbike },
    { id: 8, name: "Cruiser", price: "$25 per hour", image: cruiser },
    { id: 9, name: "Scooter", price: "$25 per hour", image: scooter },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Popular Vehicles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
