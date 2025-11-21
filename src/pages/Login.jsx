import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black ">
      {/* Login Card */}
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        
        <div className="relative mb-6">
          
          <h2 className=" text-xl text-poppins text-green-800 text-center">
            LOG IN
          </h2>
          <p className="pl-18 text-xl text-red-700 font-bold text-poppins mt-1">
            Welcome To PuzzleMaster
          </p>
        </div>

        {/* Username Input */}
        <div className="text-xl text-green-800 mb-4">
            Username
          
        <input type="text"className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xl text-green-800 ">
            Password
          </div>
          <input
            type="password"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign In Button */}
        <Link to="/Dashboard">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-5">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;