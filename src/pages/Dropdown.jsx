//not in used


import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");

  // Simulate fetching user data after login
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // Replace with your API endpoint or logic to fetch user details
        const response = await fetch("/api/user"); // Example API endpoint
        const data = await response.json();
        setUserName(data.name || "User"); // Default to "User" if name is not found
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserName();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
        onClick={toggleDropdown}
      >
        Welcome, {userName}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-10 min-w-[150px]">
          <a
            href="/profile"
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            My Profile
          </a>
          <a
            href="/change-password"
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            Change Password
          </a>
          <a
            href="/logout"
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            Log Out
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
