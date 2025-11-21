import React from "react";
import { Link } from "react-router-dom";
import LogicHeader from "../components/LogicHeader";
import Footer from "../components/Footer";

const Logic = () => {
  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold">
      <LogicHeader />

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
          <div className="text-lg mt-5 text-center">
            What comes next in the sequence?
          </div>

        <div className="text-lg mt-5 text-center">
           △ □ ○ △ □ ___
          </div>

           <div className="text-lg mt-5 text-center gap-5">
           ○  A) △       ○  B) □       ○  C) ○         ○  D) ☆
          </div>
          
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

export default Logic;
