import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 via-pink-500 to-yellow-500 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold">
              Rental<span className="text-yellow-300">Hub</span>
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              Your trusted platform for renting vehicles anytime, anywhere.
              Enjoy the convenience of premium services tailored to your needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="/home1"
                  className="text-lg font-semibold hover:text-gray-900 transition-transform transform hover:scale-110"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-lg font-semibold hover:text-gray-900 transition-transform transform hover:scale-110"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-lg font-semibold hover:text-gray-900 transition-transform transform hover:scale-110"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-lg font-semibold hover:text-gray-900 transition-transform transform hover:scale-110"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-4 bg-white text-purple-800 rounded-full h-14 w-14 flex items-center justify-center shadow-lg hover:bg-yellow-300 hover:text-white transition-transform transform hover:scale-125"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-4 bg-white text-blue-600 rounded-full h-14 w-14 flex items-center justify-center shadow-lg hover:bg-yellow-300 hover:text-white transition-transform transform hover:scale-125"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-4 bg-white text-pink-600 rounded-full h-14 w-14 flex items-center justify-center shadow-lg hover:bg-yellow-300 hover:text-white transition-transform transform hover:scale-125"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-4 bg-white text-blue-800 rounded-full h-14 w-14 flex items-center justify-center shadow-lg hover:bg-yellow-300 hover:text-white transition-transform transform hover:scale-125"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-lg text-gray-100">
          <p>
            &copy; {new Date().getFullYear()} Rental Hub. All rights reserved.
          </p>
          <div className="space-x-6">
            <a
              href="/terms"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
