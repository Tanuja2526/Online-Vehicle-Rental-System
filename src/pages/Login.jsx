import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import blurImage from "../img/b2.jpg"; // Your background image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { email, password };

    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/login", Data);
      console.log(response);

      if (response.status === 200) {
        toast.success("Login successful!");
        navigate("/home1"); // Navigate after successful login
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center mt-14 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${blurImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-br from-gray-800 to-purple-900 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-8 animate__animated animate__fadeInUp">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6">
            <label className="block text-gray-100 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-100 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white-400 mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-green-400 hover:underline hover:text-purple-500"
          >
            REGISTER
          </a>
        </p>

        <p className="text-center text-white-400 mt-6">
          Forgot password{" "}
          <a
            href="/forget-password"
            className="text-green-400 hover:underline hover:text-purple-500"
          >
            click HERE
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
