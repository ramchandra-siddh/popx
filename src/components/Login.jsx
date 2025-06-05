import React from "react";

const Login = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-left">
          Signin to your
          <br /> PopX account
        </h2>
        <p className="text-gray-500 text-left">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>
        {/* user details */}
        <div className="mb-4">
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-1 left-2 bg-white px-1 text-xs text-violet-600"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600"
            />
          </div>
        </div>

        <button className="w-full bg-gray-300 text-white py-2 rounded font-semibold cursor-not-allowed">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
