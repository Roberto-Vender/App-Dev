import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogicHeader from "../components/LogicHeader";

const Logic = () => {
  const MAX_HINTS = 5;
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [hintUsedThisPage, setHintUsedThisPage] = useState(false); // NEW
  const [userAnswer, setUserAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(25);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const API_BASE = import.meta.env.VITE_API_URL || "";

  // Fetch question
  const fetchGeneratedQuestion = async (page = 1) => {
    setLoading(true);
    setError(null);
    setShowHint(false);
    setHintUsedThisPage(false); // reset hint for new page
    setUserAnswer("");

    try {
      const url = `${API_BASE}/api/logic/generate?page=${page}`;
      const res = await fetch(url, { method: "POST" });

      if (!res.ok) throw new Error(`Status ${res.status}`);

      const payload = await res.json();

      if (payload.data.page > payload.data.totalPages) {
        navigate("/LogicSummary", { state: { score, hintCount } });
        return;
      }

      setQuestion(payload.data || null);
      setCurrentPage(payload.data.page || 1);
      setTotalPages(payload.data.totalPages || 25);
    } catch (e) {
      setError("Unable to load logic question.");
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

    fetchGeneratedQuestion(currentPage);
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
    setHintUsedThisPage(true); // mark used for this page
    setHintCount((prev) => prev + 1);
  };

  // Submit answer
  const submitAnswer = () => {
    if (!question?.answer) return;

    const isCorrect =
      userAnswer.trim().toUpperCase() === question.answer.trim().toUpperCase();

    const explanation =
      question.explanation ||
      "This logic question tests pattern recognition or mathematical reasoning.";

    const newScore = score + (isCorrect ? 1 : 0);

    const resultState = {
      answer: question.answer,
      explanation,
      score: newScore,
      page: currentPage,
      totalPages,
      hintCount,
      question: question.question,
    };

    if (currentPage >= totalPages) {
      navigate("/LogicSummary", { state: { score: newScore, hintCount } });
      return;
    }

    if (isCorrect) {
      navigate("/LogicCorrect", { state: resultState });
    } else {
      navigate("/LogicIncorrect", { state: resultState });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white flex flex-col">
      <LogicHeader />

      <div className="px-4 sm:px-6 md:px-8 mb-20 -mt-10">
        <Link to="/Dashboard">
          <button className="text-red-600 hover:text-red-400 cursor-pointer ">
            ← Back
          </button>
        </Link>
      </div>

      <div className="flex justify-center mt-3 text-sm text-yellow-600">
        Page {currentPage} of {totalPages}
      </div>

      <div className="flex justify-center mt-3 text-sm">
        <button
          onClick={handleShowHint}
          disabled={hintUsedThisPage || hintCount >= MAX_HINTS} // DISABLE if used this page or max reached
          className={`px-3 py-1 rounded ${
            hintUsedThisPage || hintCount >= MAX_HINTS
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          }`}
        >
          💡 {showHint && question?.hint ? question.hint : "Show Hint"} ({hintCount}/{MAX_HINTS})
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex flex-col items-center bg-gray-800 text-white rounded-2xl max-w-md w-full p-6 border border-gray-700">
          <div className="text-lg text-center">
            {loading
              ? "Loading question..."
              : error
              ? error
              : question?.question || "No question available"}
          </div>

          {question?.options && (
            <div className="mt-4 text-sm text-gray-300 text-center">
              {question.options}
            </div>
          )}

          {showHint && question?.hint && (
            <div className="mt-4 bg-yellow-800/30 border border-yellow-600 p-3 rounded text-yellow-300 text-center">
              <b>Hint:</b> {question.hint}
            </div>
          )}

          <input
            type="text"
            placeholder="Enter your answer (e.g., A or C)..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="mt-6 px-4 py-2 rounded bg-black border border-gray-500 text-white w-full text-center"
          />

          <div className="flex justify-between items-center mt-6 w-full gap-2">
            <button
              onClick={handleShowHint}
              disabled={hintUsedThisPage || hintCount >= MAX_HINTS}
              className={`px-4 py-2 rounded font-bold ${
                hintUsedThisPage || hintCount >= MAX_HINTS
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700 text-black"
              }`}
            >
              Show Hint ({hintCount}/{MAX_HINTS})
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

export default Logic;
