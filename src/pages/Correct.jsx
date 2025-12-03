import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";

const Correct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { answer, score = 0, page = 1, totalPages = 25 } = location.state || {};
  const { hintCount = 0 } = location.state || {};

  const nextPage = page < totalPages ? page + 1 : 1;

  // Friendly congratulatory message instead of explanation
  const congratMessage = `Nice guess! "${answer}" is correct. 🎉`;

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white">
      <RiddleHeader />

      {/* Back Button */}
      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-10 block hover:text-red-400 cursor-pointer">
          ←
        </button>
      </Link>

      {/* Boxes Section */}
      <div className="flex justify-center gap-10 mt-20 flex-wrap">
        <div className="flex flex-col items-center bg-gray-600 rounded-2xl w-120 h-auto p-6">

          <div className="text-green-500 text-3xl text-center">✅ Correct!</div>

          {/* Score */}
          <span className="text-green-400 text-xl mt-5 text-center">Score: {score}</span>

          {/* Answer */}
          <div className="mt-8 text-green-400 text-lg">Answer:</div>
          <div className="text-white text-xl text-center">{answer}</div>

          {/* Friendly Message */}
          <div className="mt-6 text-green-400 text-lg text-center">{congratMessage}</div>

          {/* Next Puzzle Button */}
          <button
            onClick={() => navigate("/Riddles", { state: { page: nextPage, score, hintCount } })}
            className="mt-10 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
          >
            Next Puzzle →
          </button>

        </div>
      </div>
    </div>
  );
};

export default Correct;