import React, { useState } from "react";
import backgroundImage from "../img/b1.jpg"; // Update the path as needed
import profileImage from "../img/profile.png"; // Add a placeholder or user's profile image
import toyotaImage from "../img/bike.jpg"; // Add images for vehicles
import hondaImage from "../img/car.jpg"; // Add images for vehicles

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123 456 7890",
  });

  const rentalHistory = [
    {
      id: 1,
      vehicle: "Sport Bike",
      rentDate: "2025-01-01",
      rentTime: "10:00 AM",
      returnDate: "2025-01-05",
      returnTime: "02:00 PM",
      amount: "200",
      image: toyotaImage,
    },
    {
      id: 2,
      vehicle: "SUV",
      rentDate: "2025-01-10",
      rentTime: "09:00 AM",
      returnDate: "2025-01-15",
      returnTime: "11:30 AM",
      amount: "300",
      image: hondaImage,
    },
  ];

  const handleEditProfile = () => {
    const name = prompt("Enter your name:", userProfile.name);
    const email = prompt("Enter your email:", userProfile.email);
    const phone = prompt("Enter your phone number:", userProfile.phone);

    if (name && email && phone) {
      setUserProfile({ name, email, phone });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Container for Profile and Rental History (Two horizontal sections) */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-6 mt-6 p-4 mt-16">
        
        {/* Profile Section */}
        <div className="w-full sm:w-1/2 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 rounded-3xl shadow-xl opacity-90">
          <img
            src={profileImage}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-xl transform hover:scale-110 transition-all duration-500"
          />
          <h1 className="text-3xl font-extrabold text-white mt-4 tracking-wider drop-shadow-lg">
            Welcome, {userProfile.name}
          </h1>
          <p className="text-white mt-2 text-base">{userProfile.email}</p>
          <p className="text-white text-base">{userProfile.phone}</p>
          <button
            onClick={handleEditProfile}
            className="mt-4 px-5 py-2 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-500 transition duration-200 transform hover:scale-105"
          >
            Edit Profile
          </button>
        </div>

        {/* Rental History Section */}
        <div className="w-full sm:w-1/2 p-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl shadow-xl opacity-90">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-4 text-center">
            Your Rental History
          </h2>
          {/* Rental History Cards */}
          <div className="w-full flex flex-col gap-6">
            {rentalHistory.map((rental) => (
              <div
                key={rental.id}
                className="bg-gradient-to-r from-blue-600 to-purple-700 p-5 rounded-lg shadow-2xl flex flex-col sm:flex-row transform hover:scale-105 transition-all duration-500"
              >
                {/* Vehicle Image */}
                <img
                  src={rental.image}
                  alt={rental.vehicle}
                  className="w-full sm:w-44 h-44 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4 shadow-lg transform hover:scale-110 transition-all duration-500"
                />

                {/* Rental Details */}
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">{rental.vehicle}</h3>
                  <p className="text-white text-base">
                    <strong>Rent Date:</strong> {rental.rentDate} at {rental.rentTime}
                  </p>
                  <p className="text-white text-base">
                    <strong>Return Date:</strong> {rental.returnDate} at {rental.returnTime}
                  </p>
                  <p className="text-white font-semibold text-base">
                    <strong>Amount Paid:</strong> ${rental.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
