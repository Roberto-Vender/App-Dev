import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";

// Short one-line explanations for each riddle answer
const briefExplanations = {
   Piano: "Because the riddle mentions 'keys' not for locks, which refers to piano keys.",
  Echo: "Because it 'speaks without a mouth' and repeats what you say.",
  Darkness: "Because 'the less you see' points to the absence of light, which is darkness.",
  Stamp: "Because something in the corner used for letters is a stamp.",
  Clock: "Because 'hands that do not clap' refers to a clock's hands showing time.",
  Towel: "Because it gets wetter as it dries you, which describes a towel.",
  Map: "Because 'cities but no houses' refers to symbols on a map.",
  Coin: "Because 'head and a tail' refer to the sides of a coin.",
  Egg: "Because 'broken before eaten' describes an egg.",
  Candle: "Because it is taller when new and gets shorter as it burns.",
  Comb: "Because 'many teeth' used for hair refers to a comb.",
  Age: "Because 'never comes down' matches how age only increases.",
  Teapot: "Because it starts and ends with T and holds tea.",
  River: "Because it 'runs but never walks', which is a river.",
  Cold: "Because you can 'catch' it, but it's an illness.",
  Footsteps: "Because 'leave behind' refers to footprints you make when walking.",
  Bank: "Because 'branches but no fruit' refers to bank branches.",
  Needle: "Because 'one eye' for thread refers to a sewing needle.",
  Cloud: "Because it 'flies without wings' and floats in the sky.",
  Window: "Because a 'wall' you can look through is a window.",
  Joke: "Because 'cracked, made, told' refers to something funny—a joke.",
  Bottle: "Because 'neck but no head' refers to a bottle's shape.",
  Sponge: "Because 'full of holes' but holds water describes a sponge.",
  Hole: "Because the more you take from it, the bigger it becomes—a hole.",
  Fence: "Because something 'around the house' that doesn't move is a fence.",
};

const Incorrect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    answer = "N/A",
    score = 0,
    page = 1,
    totalPages = 25,
  } = location.state || {};
  const { hintCount = 0 } = location.state || {};

  // Use brief explanation
  const explanation = briefExplanations[answer] || "No explanation available.";
  // Move to next page (page is the current page being displayed, so add 1 to advance)
  const nextPage = page + 1;

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold text-white">
      <RiddleHeader />

      {/* Back Button */}
      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-10 block hover:text-red-400 cursor-pointer">
          ←
        </button>
      </Link>

      <div className="flex justify-center gap-10 mt-20 flex-wrap">
        <div className="flex flex-col items-center bg-gray-600 rounded-2xl w-120 h-auto p-6">

          <div className="text-red-600 text-3xl text-center">❌ Incorrect!</div>

          {/* Score */}
          <span className="text-red-400 text-xl mt-4 text-center">Score: {score}</span>

          {/* Correct Answer */}
          <div className="mt-6 text-green-400 text-lg">Correct Answer:</div>
          <div className="text-white text-xl text-center">{answer}</div>

          {/* Brief Explanation */}
          <div className="mt-6 text-green-400 text-lg">Why?</div>
          <div className="text-white text-center px-2">{explanation}</div>

          {/* Current Score */}
          <div className="mt-4 text-gray-200 text-sm">Current Score: {score}</div>

          {/* Try Another */}
          <button
            onClick={() => navigate("/Riddles", { state: { page: nextPage, score, hintCount } })}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
          >
            Try Another →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Incorrect;