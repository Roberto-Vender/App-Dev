import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        <div className="relative mb-6">
          <h2 className="text-xl text-poppins text-green-800 text-center">REGISTER</h2>
          <p className="pl-18 text-ml text-red-700 font-bold text-poppins mt-1">Create your PuzzleMaster account</p>
        </div>

        <div className="text-xl text-green-800 mb-4">
          Full name
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-xl text-green-800 mb-4">
          Email
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xl text-green-800">Password</div>
          <input
            name="password"
            type="password"
            placeholder="Create a password"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-xl text-green-800">Confirm Password</div>
          <input
            name="password_confirmation"
            type="password"
            placeholder="Repeat your password"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="button" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-5">
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;