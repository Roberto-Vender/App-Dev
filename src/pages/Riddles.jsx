import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";

const Riddles = () => {
  const MAX_HINTS = 5;
  const [riddle, setRiddle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [hintUsedThisPage, setHintUsedThisPage] = useState(false); // track per page
  const [userAnswer, setUserAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(25);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const API_BASE = import.meta.env.VITE_API_URL || "";

  // Fetch riddle
  const fetchGeneratedRiddle = async (page = 1) => {
    setLoading(true);
    setError(null);
    setShowHint(false);
    setHintUsedThisPage(false); // reset hint for new page
    setUserAnswer("");

    try {
      const url = `${API_BASE}/api/riddles/generate?page=${page}`;
      const res = await fetch(url, { method: "POST" });

      if (!res.ok) throw new Error(`Status ${res.status}`);

      const payload = await res.json();

      if (payload.data.page > payload.data.totalPages) {
        navigate("/Summary", { state: { score, hintCount } });
        return;
      }

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
    const state = location.state || {};

    if (typeof state.score === "number") setScore(state.score);
    if (typeof state.hintCount === "number") setHintCount(state.hintCount);

    if (state.page && state.page !== currentPage) {
      setCurrentPage(state.page);
      return;
    }

    fetchGeneratedRiddle(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // Show hint (1 per page, max 5 total)
  const handleShowHint = () => {
    if (hintUsedThisPage) {
      setError("You have already used a hint on this page.");
      return;
    }

    if (hintCount >= MAX_HINTS) {
      setError(`Hint limit reached (${MAX_HINTS}).`);
      return;
    }

    setError(null);
    setShowHint(true);
    setHintUsedThisPage(true);
    setHintCount((prev) => prev + 1);
  };

  // Submit answer
  const submitAnswer = () => {
    if (!riddle?.answer) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() === riddle.answer.trim().toLowerCase();

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
      hintCount,
      question: riddle.question,
    };

    if (currentPage >= totalPages) {
      navigate("/Summary", { state: { score: newScore, hintCount } });
      return;
    }

    if (isCorrect) {
      navigate("/Correct", { state: resultState });
    } else {
      navigate("/Incorrect", { state: resultState });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white flex flex-col">
      <RiddleHeader />

      <div className="px-4 sm:px-6 md:px-8 mb-20 -mt-10">
        <Link to="/Dashboard">
          <button className="text-red-600 hover:text-red-400 cursor-pointer">
            ← Back
          </button>
        </Link>
      </div>

      <div className="flex justify-center mt-3 text-sm text-yellow-600">
        Page {currentPage} of {totalPages}
      </div>

      <div className="flex justify-center mt-3 text-sm">
        <button
          disabled={hintUsedThisPage || hintCount >= MAX_HINTS}
          className={`px-3 py-1 rounded ${
            hintUsedThisPage || hintCount >= MAX_HINTS
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          }`}
        >
          💡 {"Hint Left"} ({hintCount}/{MAX_HINTS})
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex flex-col items-center bg-gray-800 text-white rounded-2xl max-w-md w-full p-6 border border-gray-700">
          <div className="text-lg text-center">
            {loading
              ? "Loading riddle..."
              : error
              ? error
              : riddle?.question || "No riddle available"}
          </div>

          {showHint && riddle?.hint && (
            <div className="mt-4 bg-yellow-800/30 border border-yellow-600 p-3 rounded text-yellow-300 text-center">
              <b>Hint:</b> {riddle.hint}
            </div>
          )}

          <input
            type="text"
            placeholder="Enter your answer..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="mt-6 px-4 py-2 rounded bg-black border border-gray-500 text-white w-full text-center"
          />

          <div className="flex justify-between items-center mt-6 w-full gap-2">
            <button
              onClick={handleShowHint}
              disabled={hintUsedThisPage || hintCount >= MAX_HINTS}
              className={`px-7 py-2 rounded font-bold ${
                hintUsedThisPage || hintCount >= MAX_HINTS
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700 text-black"
              }`}
            >
              Show Hint
            </button>

            <button
              onClick={submitAnswer}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-black font-bold"
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riddles;
