import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutUs from "../pages/About";
import PopularCars from "../pages/CarList";
import Testimonials from "../pages/Testimonal";
import Blog from "../pages/Blog";

import carImage from "../img/car1.jpg";
import bikeImage from "../img/bike1.jpg";
import bicycleImage from "../img/bicycle1.jpg";
import backgroundImage from "../img/background.jpg";

const backgroundImages = [carImage, bikeImage, bicycleImage, backgroundImage];

const Home1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Main Section with Sliding Background Image */}
      <div
        className="min-h-screen bg-cover bg-center relative transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90 flex items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-center text-white p-5 max-w-3xl mx-auto">
            <h1
              className="text-5xl font-extrabold mb-6 leading-tight tracking-wide"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Rental<span className="text-yellow-400">Hub</span>
            </h1>
            <p
              className="text-lg mt-6 leading-relaxed font-semibold"
              style={{
                fontFamily: "revert-layer",
                lineHeight: "1.8",
                paddingTop: "10px",
                fontSize: "20px",
              }}
            >
              Discover the joy of hassle-free travel with <span className="text-blue-400">Rental Hub!</span>
              From cars, bikes, and bicycles, we’ve got your journey covered. Your ride, your way—anytime, anywhere.
            </p>

            {/* Book a Ride Button */}
            <Link
              to="/bookride"
              className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-10">
        <AboutUs />
      </div>

      {/* Popular Cars Section */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10">
        <PopularCars />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-10">
        <Testimonials />
      </div>

      {/* Blog Section */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 py-10">
        <Blog />
      </div>
    </div>
  );
};

export default Home1;
