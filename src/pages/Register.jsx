import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";



const Register = () => {
  const [displayName, setDislayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const registerPost = async () => {
  if (password !== confirm) {
    setMessage("Password doesn't match!");
    return;
  }

  const postData = {
    displayName: displayName,
    email: email,
    password: password,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/api/register', {
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
      navigate('/Login');
    }, 1000);

  } catch (error) {
    // error.message now contains proper text
    setMessage(error.message);
  }
};

  
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        <div className="relative mb-6">
          <h2 className="text-xl text-poppins text-green-800 text-center">REGISTER</h2>
          <p className="pl-18 text-ml text-red-700 font-bold text-poppins mt-1">Create your PuzzleMaster account</p>
        </div>

        <div className="text-xl text-green-800 mb-4">
          Display Name
          <input
            name="name"
            type="text"
            value={displayName}
            onChange={(e) => setDislayName(e.target.value)}
            placeholder="Your full name"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-xl text-green-800 mb-4">
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xl text-green-800">Password</div>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-xl text-green-800">Confirm Password</div>
          <input
            name="password_confirmation"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repeat your password"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-yellow-200 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="button" onClick={registerPost} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-5">
          Register
        </button>
        {message && (
          <p>{message}</p>
        ) }
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;