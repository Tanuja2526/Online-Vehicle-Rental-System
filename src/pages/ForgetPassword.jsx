import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../img/b2.jpg'; // Add your background image path

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forget-password', { email });
      setMessage(response.data.message);
      setStep(2); // Proceed to OTP step
    } catch (error) {
      setMessage('Error sending OTP to your email');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      setMessage(response.data.message);
      setStep(3); // Proceed to set new password
    } catch (error) {
      setMessage('Invalid OTP, please try again');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { email, newPassword });
      setMessage(response.data.message);
      setStep(1); // Reset to initial step after successful password reset
    } catch (error) {
      setMessage('Error resetting password, please try again');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-to-br from-indigo-600 to-purple-800 p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-8 animate__animated animate__fadeIn">
          {step === 1 && 'Forget Password'}
          {step === 2 && 'Verify OTP'}
          {step === 3 && 'Reset Password'}
        </h2>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transform transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-200"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP sent to your email"
                className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-200"
            >
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-200"
            >
              Reset Password
            </button>
          </form>
        )}

        {message && (
          <p
            className={`mt-4 text-center text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'} animate__animated animate__fadeIn`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
