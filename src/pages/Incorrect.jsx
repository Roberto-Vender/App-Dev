import React from "react";
import { Link } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";

const Incorrect = () => {
  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold">
      <RiddleHeader />

      {/* Back Button */}
      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-10 block hover:text-red-400 cursor-pointer"  >
          ←
        </button>
      </Link>
 

      {/* Boxes Section */}
      <div className="flex justify-center gap-10 mt-20 flex-wrap">

        {/* Riddle Card */}
        <div className="flex flex-col items-center bg-gray-600 text-white rounded-2xl w-120 h-80 p-6 ">
            <div className=" text-red-600 text-3xl text-center mr-10">❌ Incorrect!</div>
            <span className=" text-green-600 text-1.5xl mt-5 text-center">Answer: Piano</span>     
            <div className=" mt-10 text-green-600 text-xl text-center">EXPLAINATION</div>
            <div className="  text-white text-xl text-center">
            A piano has keys (the black and white keys) but cannot open locks like a key would.
            </div>
            <Link to="/NextPuzzle">
            <div className="text-red-600 text-sm mt-12 ml-85 ">Try Another →</div>
          </Link>
        </div>  
        </div>
        

</div>
  );
};

export default Incorrect;
