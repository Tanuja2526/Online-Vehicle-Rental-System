import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import backgroundImage from "../img/b2.jpg"; // Replace with the actual path

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed py-8 px-4 sm:px-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-5xl mt-14 bg-white bg-opacity-90 rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Get in Touch */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 text-white p-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold uppercase tracking-wide text-center">Get in Touch</h1>
            <p className="mt-4 text-center text-sm">
              We're here to help! Reach out to us for any questions or assistance.
            </p>
            <ul className="mt-6 space-y-6">
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <a href="mailto:sales@example.com" className="hover:underline">
                    sales@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FaPhone className="text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <a href="tel:+911234567890" className="hover:underline">
                    +91 12345 67890
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p>21 Rent Road Street, Pune, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Drop Us a Message */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Or Drop Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-md hover:opacity-90 transform hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
