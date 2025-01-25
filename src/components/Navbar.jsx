import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaUser,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/images/car_emoji.png";
import profileImg from "../img/profile.png"; // Example profile image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(e.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-pink-500 to-yellow-500 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-16 mr-2" />
          <h1 className="text-white text-3xl font-extrabold">
            Rental<span className="text-yellow-300">Hub</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white items-center text-lg">
          <Link
            to="/"
            className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaInfoCircle className="mr-2" /> About Us
          </Link>
          <Link
            to="/blog"
            className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaBlog className="mr-2" /> Blog
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>
        </div>

        {/* Profile Icon */}
        <div
          className="relative flex items-center"
          ref={profileDropdownRef}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="h-10 w-10 rounded-full cursor-pointer border-2 border-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={toggleProfileDropdown}
          />
          {isProfileDropdownOpen && (
            <div className="absolute top-14 right-0 w-48 bg-gradient-to-r from-purple-600 to-pink-500 border border-gray-300 shadow-lg rounded-lg z-10 text-white">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                Profile
              </Link>
              {/* <Link
                to="/rental-history"
                className="block px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                Rental History
              </Link> */}
              <Link
                to="/logout"
                className="block px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                Logout
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-800 via-pink-500 to-yellow-500 text-white space-y-4 py-4 px-6">
          <Link
            to="/"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaInfoCircle className="mr-2" /> About Us
          </Link>
          <Link
            to="/blog"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaBlog className="mr-2" /> Blog
          </Link>
          <Link
            to="/contact"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>
          <Link
            to="/login"
            className="flex items-center px-10 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
            onClick={toggleMobileMenu}
          >
            <FaUser className="mr-2" /> Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
