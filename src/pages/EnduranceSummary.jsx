import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EnduranceHeader from "../components/EnduranceHeader";

const EnduranceSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    score = 0, 
    questionsAnswered = 0, 
    totalTime = 600, 
    timeUsed = 0,
    lastPage = 1
  } = location.state || {};

  const timeRemaining = totalTime - timeUsed;
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white">
      <EnduranceHeader />

      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center bg-gray-600 rounded-2xl w-full max-w-xl h-auto p-6">
          <div className="text-blue-400 text-2xl font-bold text-center">Endurance Run Complete!</div>

          <div className="mt-6 grid grid-cols-2 gap-4 w-full">
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-yellow-400 text-2xl">🧩</div>
              <div className="text-gray-300 text-xs mt-1">Questions Answered</div>
              <div className="text-white text-2xl font-bold mt-1">{questionsAnswered}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-orange-400 text-2xl">📄</div>
              <div className="text-gray-300 text-xs mt-1">Last Page Reached</div>
              <div className="text-white text-2xl font-bold mt-1">Question {lastPage} of 25</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-blue-400 text-2xl">⏱️</div>
              <div className="text-gray-300 text-xs mt-1">Time Used</div>
              <div className="text-white text-2xl font-bold mt-1">{formatTime(timeUsed)}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-cyan-400 text-2xl">⏳</div>
              <div className="text-gray-300 text-xs mt-1">Time Remaining</div>
              <div className="text-white text-2xl font-bold mt-1">{formatTime(timeRemaining)}</div>
            </div>

           

            </div>

          <div className="mt-6 flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => navigate("/Dashboard")}
              className="bg-gray-700 hover:bg-gray-600 px-5 py-1 rounded text-white text-sm"
            >
              Return to Dashboard
            </button>

            <button
              onClick={() =>
                navigate("/Endurance", { state: { page: 1, score: 0, hintCount: 0 } })
              }
              className="bg-blue-600 hover:bg-blue-700 px-5 py-1 rounded text-white text-sm"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnduranceSummary;
