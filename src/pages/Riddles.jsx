import React from "react";
import { Link } from "react-router-dom";
import RiddleHeader from "../components/RiddleHeader";
import Footer from "../components/Footer";

const Riddles = () => {
  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold">
      <RiddleHeader />

      {/* Back Button */}
      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-10 block hover:text-red-400 cursor-pointer"  >
          ←
        </button>
      </Link>

      {/* Title */}
      <div className="text-center text-lg mt-10 text-white">
        45% Complete
        <div className="flex justify-center mt-4">
          <svg width="600" height="6" viewBox="0 0 1062 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1062" height="6" rx="3" fill="#374151" fillOpacity="0.45"/>
          </svg>
        </div>
      </div>

      <div className="flex justify-center mt-3   text-1xl  text-yellow-600 ">💡 Hint: Think about musical instruments...</div>
      {/* Boxes Section */}
      <div className="flex justify-center gap-10 mt-5 flex-wrap">

        {/* Riddle Card */}
        <div className="flex flex-col items-center bg-gray-600 text-white rounded-2xl w-150 h-70 p-6 ">
          <div className="text-lg mt-10 text-center">
            What has keys but can't open locks?
          </div>

          <input type="text" placeholder="Type your answer here..." 
          className=" bg-blue-600 text-white placeholder-gray-300 py-2 px-4 w-120 rounded-md mt-20 text-left"
          />
        </div>
        </div>
        <div className="flex justify-center mt-6 gap-20">
      <div className="py-2 w-50 text-white bg-yellow-600 text-center rounded-md cursor-pointer">
      Get Hint
    </div>
    <Link to="/Correct">
    <div className="py-2 w-50 text-white bg-green-600 text-center rounded-md cursor-pointer">
    Submit Answer
        </div>
        </Link>
        </div>

</div>
  );
};

export default Riddles;
