import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import EnduranceHeader from "../components/EnduranceHeader";

const Endurance = () => {
  const MAX_HINTS = 5;
  const TOTAL_TIME = 10 * 60; // 10 minutes in seconds
  const TOTAL_QUESTIONS = 25;

  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintUsedThisPage, setHintUsedThisPage] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME);
  const [quizStarted, setQuizStarted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const API_BASE = import.meta.env.VITE_API_URL || "";

  // Global timer
  useEffect(() => {
    if (!quizStarted) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [quizStarted]);

  // Navigate to summary when time runs out
  useEffect(() => {
    if (timeRemaining === 0 && quizStarted) {
      navigate("/EnduranceSummary", {
        state: {
          score,
          questionsAnswered: currentPage,
          totalTime: TOTAL_TIME,
          timeUsed: TOTAL_TIME - timeRemaining,
          hintCount,
          lastPage: currentPage, // ✅ Pass lastPage here
        },
      });
    }
  }, [timeRemaining, quizStarted, navigate, score, currentPage, hintCount]);

  // Initialize state from navigation
  useEffect(() => {
    const state = location.state || {};
    if (typeof state.score === "number") setScore(state.score);
    if (typeof state.hintCount === "number") setHintCount(state.hintCount);
    if (typeof state.timeRemaining === "number") setTimeRemaining(state.timeRemaining);
    if (state.page && state.page !== currentPage) setCurrentPage(state.page);
    setQuizStarted(true);
  }, []);

  // Fetch question on page change
  useEffect(() => {
    const fetchGeneratedQuestion = async (page = 1) => {
      setLoading(true);
      setError(null);
      setShowHint(false);
      setHintUsedThisPage(false);
      setUserAnswer("");

      try {
        const res = await fetch(`${API_BASE}/api/endurance/generate?page=${page}`, {
          method: "POST",
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const payload = await res.json();
        setQuestion(payload.data || null);
      } catch (e) {
        setError("Unable to load endurance question.");
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratedQuestion(currentPage);
  }, [currentPage]);

  const handleShowHint = () => {
    if (hintUsedThisPage || hintCount >= MAX_HINTS) return;
    setShowHint(true);
    setHintUsedThisPage(true);
    setHintCount((prev) => prev + 1);
  };

  const formatTime = (seconds) =>
    `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${seconds % 60}`;

  const submitAnswer = () => {
    if (!question?.answer) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase();
    const newScore = score + (isCorrect ? 1 : 0);

    const resultState = {
      answer: question.answer,
      explanation: question.explanation || "Question answered.",
      score: newScore,
      page: currentPage,
      hintCount,
      timeRemaining,
      lastPage: currentPage, // ✅ Add lastPage here
      type: question.type,
      question: question.question,
    };

    navigate(isCorrect ? "/EnduranceCorrect" : "/EnduranceIncorrect", {
      state: resultState,
    });
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white flex flex-col">
      <EnduranceHeader />

      <div className="px-4 sm:px-6 md:px-8 -mt-10 mb-15">
        <Link to="/Dashboard">
          <button className="text-red-600 hover:text-red-400 cursor-pointer">
            ← Back
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-3 gap-10">
        <div className="text-sm text-yellow-600">
          Question {currentPage} of {TOTAL_QUESTIONS}
        </div>
        <div
          className={`text-2xl font-bold ${timeRemaining <= 60 ? "text-red-500" : "text-green-400"}`}
        >
          ⏱️ {formatTime(timeRemaining)}
        </div>
        <div className="text-sm text-blue-400">Score: {score}</div>
      </div>

      <div className="flex justify-center mt-3 text-sm">
        <button
          onClick={handleShowHint}
          disabled={hintUsedThisPage || hintCount >= MAX_HINTS}
          className={`px-3 py-1 rounded ${
            hintUsedThisPage || hintCount >= MAX_HINTS
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          }`}
        >
          💡 {hintUsedThisPage ? "Hint used" : `Show Hint (${MAX_HINTS - hintCount} left)`}
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex flex-col items-center bg-gray-800 text-white rounded-2xl max-w-md w-full p-6 border border-gray-700">
          <div className="text-xs text-purple-300 mb-2">
            Type: {question?.type === "riddle" ? "🎭 Riddle" : "🧠 Logic"}
          </div>
          <div className="text-lg text-center">
            {loading ? "Loading question..." : error ? error : question?.question || "No question available"}
          </div>

          {showHint && question?.hint && (
            <div className="mt-4 bg-yellow-800/30 border border-yellow-600 p-3 rounded text-yellow-300 text-center">
              <b>Hint:</b> {question.hint}
            </div>
          )}

          <input
            type="text"
            placeholder={timeRemaining <= 0 ? "Time's up! Moving to next page..." : "Enter your answer..."}
            value={userAnswer}
            onChange={(e) => timeRemaining > 0 && setUserAnswer(e.target.value)}
            disabled={timeRemaining <= 0}
            className={`mt-6 px-4 py-2 rounded bg-black border text-white w-full text-center ${
              timeRemaining <= 0
                ? "border-red-500 text-red-400 cursor-not-allowed"
                : "border-gray-500"
            }`}
          />

          {timeRemaining <= 0 && (
            <div className="mt-4 text-red-400 text-center font-bold animate-pulse">
              ⏱️ Time's up! Moving to next question...
            </div>
          )}

          <div className="flex justify-between items-center mt-6 w-full gap-2">
            <button
              onClick={handleShowHint}
              disabled={hintUsedThisPage || hintCount >= MAX_HINTS || timeRemaining <= 0}
              className={`px-4 py-2 rounded font-bold ${
                hintUsedThisPage || hintCount >= MAX_HINTS || timeRemaining <= 0
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700 text-black"
              }`}
            >
              Show Hint
            </button>

            <button
              onClick={submitAnswer}
              disabled={timeRemaining <= 0}
              className={`px-6 py-2 rounded text-black font-bold ${
                timeRemaining <= 0
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endurance;
