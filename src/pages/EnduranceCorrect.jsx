import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EnduranceHeader from "../components/EnduranceHeader";

const EnduranceCorrect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { answer, explanation, score, page, hintCount, timeRemaining, type } =
    location.state || {};
  const TOTAL_QUESTIONS = 25;
  const nextPage = page + 1;

  const handleNextClick = () => {
    if (page >= TOTAL_QUESTIONS) {
      navigate("/EnduranceSummary", {
        state: {
          score,
          questionsAnswered: page,
          totalTime: 10 * 60,
          timeUsed: 10 * 60 - timeRemaining,
          hintCount,
          lastPage: page, // ✅ Pass lastPage
        },
      });
    } else {
      navigate("/Endurance", {
        state: { page: nextPage, score, hintCount, timeRemaining },
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white">
      <EnduranceHeader />
      <div className="flex justify-center gap-10 mt-20 flex-wrap">
        <div className="flex flex-col items-center bg-gray-600 rounded-2xl w-120 h-auto p-6">
          <div className="text-green-500 text-3xl text-center">✅ Correct!</div>
          <span className="text-green-400 text-xl mt-4 text-center">Score: {score}</span>

          <div className="mt-6 text-white text-lg">Question Type:</div>
          <div className="text-purple-300 text-center px-2">
            {type === "riddle" ? "🎭 Riddle" : "🧠 Logic"}
          </div>

          <div className="mt-6 text-green-400 text-lg">Answer:</div>
          <div className="text-white text-xl text-center font-bold">{answer}</div>

          <div className="mt-6 text-green-400 text-lg">Why?</div>
          <div className="text-white text-center px-2">{explanation}</div>

          <div className="mt-4 text-gray-200 text-sm">
            Time Remaining: {Math.floor(timeRemaining / 60)}:
            {timeRemaining % 60 < 10 ? "0" : ""}
            {timeRemaining % 60}
          </div>

          <button
            onClick={handleNextClick}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
          >
            {page >= TOTAL_QUESTIONS ? "View Summary →" : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnduranceCorrect;
