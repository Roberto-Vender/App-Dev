import React from "react";
import { Link } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";
import Footer from "../components/Footer";

const Correct = () => {
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
            <div className=" text-green-600 text-3xl text-center mr-10">✅ Correct!</div>
            <span className=" text-green-600 text-1xl mt-5 text-center">+50 points</span>     
            <div className=" mt-10 text-green-600 text-xl text-center">EXPLAINATION</div>
            <div className="  text-white text-xl text-center">
            A piano has keys (the black and white keys) but cannot open locks like a key would.
            </div>
            <Link to="/Incorrect">
            <div className="text-red-600 text-sm mt-12 ml-85 ">Next Puzzle →</div>
          </Link>
        </div>  
        </div>
        

</div>
  );
};

export default Correct;
