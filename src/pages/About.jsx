import React, { useEffect, useState } from "react";
import aboutImage from "../img/background.jpg"; // Replace with your actual image path

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about-us-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="about-us-section"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-50 py-16 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className={`w-full max-w-md h-auto object-cover rounded-xl shadow-lg transition-all duration-700 transform ${
              isVisible ? "scale-105" : "scale-95 opacity-70"
            } hover:scale-110 hover:opacity-100`}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2
            className={`text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } bg-gradient-to-r from-indigo-500 via-pink-500 to-red-400 bg-clip-text text-transparent`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why <span className="underline decoration-wavy decoration-yellow-400">Rental Hub</span>?
          </h2>
          <p
            className={`text-lg leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ fontFamily: "Roboto, sans-serif", lineHeight: "1.8" }}
          >
            At Rental Hub, we redefine convenience by offering a seamless connection to a diverse fleet of vehicles tailored to your needs. With our focus on quality and affordability, we ensure every rental is effortless, reliable, and designed to exceed expectations.
          </p>
          <p
            className={`text-lg leading-relaxed mt-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ fontFamily: "Roboto, sans-serif", lineHeight: "1.8" }}
          >
            Whether you’re planning a weekend getaway or need a vehicle for a business trip, our diverse fleet has you covered. With reliability, comfort, and style at the heart of our service, you can explore your destination with complete peace of mind. Choose Rental Hub—your trusted travel partner for every occasion.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
