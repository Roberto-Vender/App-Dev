import React from "react";
import { Link } from "react-router-dom";
import NewHeader from "../components/NewHeader";

const ChoosePuzzle = () => {
  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold">
      <NewHeader />

      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-10 mb-30 block hover:text-red-400 cursor-pointer">
          ← Back to Dashboard
        </button>
      </Link>

      {/* Title */}
      <div className="text-center text-4xl mt-10 text-green-600">
        Choose Your Puzzle Type
      </div>

      {/* Boxes Section */}
      <div className="flex justify-center gap-10 mt-12 flex-wrap">

        {/* RIDDLES */}
        <Link to="/Riddles">
          <div className="flex flex-col items-center bg-yellow-600 text-white rounded-2xl w-80 p-6 hover:scale-105 duration-200 cursor-pointer">
            <div className="text-xl">RIDDLES</div>
            <span className="text-sm text-white mt-2 text-center">
              Word puzzles & brain teasers
            </span>
          </div>
        </Link>

        {/* LOGIC */}
        <Link to="/Logic">
          <div className="flex flex-col items-center bg-blue-600 text-white rounded-2xl w-80 p-6 hover:scale-105 duration-200 cursor-pointer">
            <div className="text-xl">LOGIC</div>
            <span className="text-sm text-white mt-2 text-center">
              Patterns & sequences
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ChoosePuzzle;
