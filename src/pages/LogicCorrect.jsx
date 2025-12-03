import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import LogicHeader from "../components/LogicHeader";

const LogicCorrect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    answer = "N/A",
    score = 0,
    page = 1,
    totalPages = 25,
    question = "",
    hintCount = 0,
  } = location.state || {};

  const nextPage = page + 1;

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white">
      <LogicHeader />

      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-10 block hover:text-red-400 cursor-pointer">
          ←
        </button>
      </Link>

      <div className="flex justify-center gap-10 mt-20 flex-wrap">
        <div className="flex flex-col items-center bg-green-600 rounded-2xl w-120 h-auto p-6">
          <div className="text-green-300 text-3xl text-center">✅ Correct!</div>

          <span className="text-white text-xl mt-4 text-center">Score: {score}</span>

          <div className="mt-6 text-white text-lg">Question:</div>
          <div className="text-gray-200 text-center px-2">{question}</div>

          <div className="mt-6 text-white text-lg">Your Answer:</div>
          <div className="text-green-300 text-xl text-center font-bold">{answer}</div>

          <div className="mt-4 text-gray-200 text-sm">Current Score: {score}</div>

          {nextPage > totalPages ? (
            <button
              onClick={() => navigate("/LogicSummary", { state: { score, hintCount } })}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
            >
              View Summary →
            </button>
          ) : (
            <button
              onClick={() => navigate("/Logic", { state: { page: nextPage, score, hintCount } })}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
            >
              Next Question →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogicCorrect;
