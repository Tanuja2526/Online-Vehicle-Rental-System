//not in use

import React from "react";
import backgroundImage from "../img/background.jpg"; // Update the path as needed
import profileImage from "../img/profile.png"; // Add a placeholder or user's profile image

const RentalHistoryPage = () => {
  const rentalHistory = [
    {
      id: 1,
      vehicle: "Toyota",
      rentDate: "2025-01-01",
      rentTime: "10:00 AM",
      returnDate: "2025-01-05",
      returnTime: "02:00 PM",
      amount: "200",
    },
    {
      id: 2,
      vehicle: "Honda",
      rentDate: "2025-01-10",
      rentTime: "09:00 AM",
      returnDate: "2025-01-15",
      returnTime: "11:30 AM",
      amount: "300",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl font-bold text-white mt-4 drop-shadow-lg">
          Welcome, John Doe
        </h1>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-extrabold text-white mt-8 mb-6 drop-shadow-lg">
        Rental History
      </h2>

      {/* Rental History Table */}
      <div className="w-full max-w-5xl bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl">
        <table className="w-full text-left text-gray-800">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border-b border-gray-200 p-4">Vehicle</th>
              <th className="border-b border-gray-200 p-4">Rent Date</th>
              <th className="border-b border-gray-200 p-4">Rent Time</th>
              <th className="border-b border-gray-200 p-4">Return Date</th>
              <th className="border-b border-gray-200 p-4">Return Time</th>
              <th className="border-b border-gray-200 p-4">Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {rentalHistory.map((rental) => (
              <tr
                key={rental.id}
                className="hover:bg-blue-100 transition duration-200"
              >
                <td className="p-4 border-b border-gray-200">{rental.vehicle}</td>
                <td className="p-4 border-b border-gray-200">{rental.rentDate}</td>
                <td className="p-4 border-b border-gray-200">{rental.rentTime}</td>
                <td className="p-4 border-b border-gray-200">{rental.returnDate}</td>
                <td className="p-4 border-b border-gray-200">{rental.returnTime}</td>
                <td className="p-4 border-b border-gray-200 text-green-600 font-semibold">
                  ${rental.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentalHistoryPage;
