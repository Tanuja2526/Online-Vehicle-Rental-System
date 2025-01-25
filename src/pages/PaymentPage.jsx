import { useState } from "react";
import background from "../img/car1.jpg";
import visa from "../img/visa.jpg";
import gpay from "../img/gpay.jpg";
import mastercard from "../img/mastercard.jpg";

function PaymentPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.cardNumber) {
      formErrors.cardNumber = "Card number is required.";
    }
    if (!formData.expiryDate) {
      formErrors.expiryDate = "Expiry date is required.";
    }
    if (!formData.cvv) {
      formErrors.cvv = "CVV is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r from-teal-500 via-purple-600 to-pink-700 mt-16 shadow-xl rounded-lg p-8 w-full max-w-4xl flex space-x-8">
        {/* Left Section - Form */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600 animate__animated animate__fadeIn">
            Secure Payment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block font-semibold text-white mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="Enter Card Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 transform hover:ring-2 hover:ring-pink-500"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-white mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 transform hover:ring-2 hover:ring-pink-500"
                value={formData.expiryDate}
                onChange={handleChange}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-white mb-2">CVV</label>
              <input
                type="password"
                name="cvv"
                placeholder="***"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 transform hover:ring-2 hover:ring-pink-500"
                value={formData.cvv}
                onChange={handleChange}
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 ${!formData.cardNumber || !formData.expiryDate || !formData.cvv
                  ? "bg-gray-400 cursor-not-allowed"
                  : "hover:bg-blue-700"
                }`}
                disabled={!formData.cardNumber || !formData.expiryDate || !formData.cvv}
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Payment Methods */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold text-center text-white mb-4">Other Payment Methods</h3>

          {/* Payment Options: Google Pay, Visa, MasterCard */}
          <div className="flex justify-around items-center space-x-4">
            {/* Google Pay */}
            <a href="https://pay.google.com" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md transform transition-all duration-500 hover:scale-110 hover:bg-indigo-600">
                <img src={gpay} alt="Google Pay" className="w-8 h-8" />
                <span>Google Pay</span>
              </button>
            </a>

            {/* Visa */}
            <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md transform transition-all duration-500 hover:scale-110 hover:bg-blue-800">
                <img src={visa} alt="Visa" className="w-8 h-8" />
                <span>Visa</span>
              </button>
            </a>

            {/* MasterCard */}
            <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-lg shadow-md transform transition-all duration-500 hover:scale-110 hover:bg-red-700">
                <img src={mastercard} alt="MasterCard" className="w-9 h-9" />
                <span>MasterCard</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
