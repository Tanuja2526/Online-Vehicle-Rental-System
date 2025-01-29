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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Main Section with Sliding Background Image */}
      <div
        className={`min-h-screen bg-cover bg-center relative transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-center text-white p-6 max-w-3xl mx-auto">
            <h1
              className="text-6xl font-extrabold mb-6 tracking-wide drop-shadow-xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
              }}
            >
              Rental<span className="text-yellow-400">Hub</span>
            </h1>
            <p className="text-lg mt-6 leading-relaxed font-semibold text-gray-300">
              Discover the joy of hassle-free travel with{" "}
              <span className="text-blue-400 font-bold">Rental Hub!</span>
              <br />
              From <span className="text-yellow-300">cars</span>,{" "}
              <span className="text-green-300">bikes</span>, and{" "}
              <span className="text-purple-300">bicycles</span>, we’ve got your
              journey covered. <br />
              <span className="italic">Your ride, your way—anytime, anywhere.</span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/bookride"
                className="px-8 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
              >
                🚗 Book a Ride
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg shadow-lg hover:bg-gray-300 transition-colors duration-300"
              >
                ℹ️ Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12 px-6">
        <AboutUs />
      </div>

      {/* Popular Cars Section */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6">
        <PopularCars />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-12 px-6">
        <Testimonials />
      </div>

      {/* Blog Section */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 py-12 px-6">
        <Blog />
      </div>
    </div>
  );
};

export default Home1;
