import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const loginPost = async () => {
    const postData = {
      email: email,
      password : password
    }
    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // important for Laravel API
        },
        body: JSON.stringify(postData)
      });

      const data = await response.json(); // wait for JSON to resolve

      if (!response.ok) {
        // now you can access data.message
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      setMessage(data.message);
      setTimeout(() => {
        navigate('/Dashboard');
      }, 1000);
    } catch (error) {
      setMessage(error.message);
    }
  }
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
            Email
          
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xl text-green-800 ">
            Password
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign In Button */}
        {message && (<p>{message}</p>)}
        <button onClick={ loginPost} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-5">
            Login
          </button>
      </div>
    </div>
  );
};

export default Login;