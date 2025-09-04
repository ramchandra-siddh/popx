import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account");
  };
  return (
    <div>
      {/* user registration page */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 text-left">
          <h2 className="text-3xl font-bold text-left mb-7">
            Create your <br />
            PopX account
          </h2>

          <div className="mb-4">
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                required
                className="w-full mt-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
              >
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                required
                className="w-full mt-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full mt-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                required
                className="w-full mt-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label
                htmlFor="companyName"
                className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
              >
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full mt-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
              />
            </div>
          </div>

          <p className="text-sm">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4 pb-10">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="yes" required /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="no" /> No
            </label>
          </div>
          <div className="mt-6 pt-2">
            <button className="w-full bg-violet-600 text-white py-2 rounded">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
