import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";

const Riddles = () => {
  const [riddle, setRiddle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(25);
  const [score, setScore] = useState(0);
  

  const navigate = useNavigate();
  const location = useLocation();
  const API_BASE = import.meta.env.VITE_API_URL || "";

  

  const fetchGeneratedRiddle = async (page = 1) => {
    setLoading(true);
    setError(null);
    setShowHint(false);
    setShowAnswer(false);
    setUserAnswer("");

    try {
      const url = `${API_BASE}/api/riddles/generate?page=${page}`;
      const res = await fetch(url, { method: "POST" });

      if (!res.ok) throw new Error(`Status ${res.status}`);

      const payload = await res.json();
      setRiddle(payload.data || null);
      setCurrentPage(payload.data.page || 1);
      setTotalPages(payload.data.totalPages || 25);
    } catch (e) {
      setError("Unable to load riddle.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If navigated here with state (page/score), pick that up
    const state = location.state || {};
    if (typeof state.score === "number") setScore(state.score);
    if (state.page && state.page !== currentPage) {
      setCurrentPage(state.page);
      // fetchGeneratedRiddle will run from the effect below when currentPage changes
      return;
    }

    fetchGeneratedRiddle(currentPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const submitAnswer = () => {
    if (!riddle?.answer) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() ===
      riddle.answer.trim().toLowerCase();

    const explanation =
      riddle.explanation ||
      "This riddle is solved by analyzing the hints and the meaning behind the words.";

    const newScore = score + (isCorrect ? 1 : 0);

    const resultState = {
      answer: riddle.answer,
      explanation,
      score: newScore,
      page: currentPage,
      totalPages,
    };

    if (isCorrect) {
      navigate("/Correct", { state: resultState });
    } else {
      navigate("/Incorrect", { state: resultState });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white flex flex-col">
      <RiddleHeader />

      <div className="px-4 sm:px-6 md:px-8 mt-4">
        <Link to="/Dashboard">
          <button className="text-red-600 hover:text-red-400 cursor-pointer">
            ← Back
          </button>
        </Link>
      </div>

      {/* Page Info */}
      <div className="flex justify-center mt-3 text-sm text-yellow-600">
        Page {currentPage} of {totalPages}
      </div>

      {/* Hint */}
      <div className="flex justify-center mt-3 text-sm text-yellow-600">
        💡 Hint: {showHint ? riddle?.hint : "Click to show hint"}
      </div>

      {/* Riddle Card */}
      <div className="flex justify-center gap-10 mt-5 flex-wrap">
        <div className="flex flex-col items-center bg-gray-800 text-white rounded-2xl w-150 h-auto p-6 border border-gray-700">
          <div className="text-lg mt-5 text-center">
            {loading
              ? "Loading riddle..."
              : error
              ? error
              : riddle?.question || "No riddle available"}
          </div>

          {/* Answer input */}
          <input
            type="text"
            placeholder="Enter your answer..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="mt-6 px-4 py-2 rounded bg-black border border-gray-500 text-white w-full text-center"
          />

          {/* Buttons */}
          <div className="flex justify-between items-center mt-5 w-full">
            {/* Show Hint Button */}
            <button
              onClick={() => setShowHint(true)}
              className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-black font-bold"
            >
              Show Hint
            </button>

            {/* Submit Answer Button */}
            <button
              onClick={submitAnswer}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-black font-bold"
            >
              Submit Answer
            </button>
          </div>

          {/* Show Answer (optional) */}
          {showAnswer && (
            <div className="mt-4 text-red-400 text-center">
              Answer: {riddle?.answer}
            </div>
          )}

          <button
            onClick={() => setShowAnswer(true)}
            className="mt-3 text-sm text-gray-400 underline"
          >
            Reveal Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riddles;
