import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="text-center space-y-4 pt-72">
        {/* user welcome page */}
        <h2 className="text-xl font-bold text-left">Welcome to PopX</h2>
        <p className="text-gray-500 text-left">
          Lorem ipsum dolor amet consectetur adipisicing elit. Minus, nulla
          quibusdam
        </p>
        <Link
          to="/register"
          className="block bg-violet-600 hover:bg-violet-800 text-white py-2 rounded transition duration-300"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block bg-violet-200 hover:bg-violet-300  text-black py-2 rounded transition duration-300"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
