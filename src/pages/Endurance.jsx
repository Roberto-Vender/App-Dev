import React from "react";
import { Link } from "react-router-dom";
import EnduranceHeader from "../components/EnduranceHeader";

const Endurance = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold">
      <EnduranceHeader />

      {/* Back Button */}
      <Link to="/Dashboard">
        <button className="text-red-600 ml-7 -mt-20 block hover:text-red-400 cursor-pointer">
          ←
        </button>
      </Link>

      {/* Title */}
      <div className="flex justify-center mt-10">
        <div className="text-center text-lg text-white bg-yellow-600 py-2 px-6 rounded-xl shadow-lg w-full max-w-xs">
          <div className="font-semibold text-xl mb-2">Current Streak</div>
          <div className="text-sm text-white/90">5x Puzzles Completed</div>
          <div className="flex justify-center mt-3"></div>
        </div>
      </div>

      <svg
        className="mt-5 ml-55"
        width="900"
        height="6"
        viewBox="0 0 1062 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1062" height="6" rx="3" fill="#374151" fillOpacity="0.45" />
      </svg>

      <div className="flex justify-center items-center mt-3 gap-45 text-yellow-600 text-lg">
        <div>💡 Hint: Think about musical instruments...</div>
        <div>⏱️ 05:00</div>
      </div>

      {/* Boxes Section */}
      <div className="flex justify-center gap-10 mt-5 flex-wrap">
        {/* Riddle Card */}
        <div className="flex flex-col items-start bg-gray-600 text-white rounded-2xl w-150 h-70 p-6">
          <div className="text-sm text-blue-800">Riddle</div>
          <div className="text-lg mt-5 text-center w-full">
            What has keys but can't open locks?
          </div>

          <input
            type="text"
            placeholder="Type your answer here..."
            className="bg-blue-600 text-white ml-8 placeholder-gray-300 py-2 px-4 w-120 rounded-md mt-20 text-left"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-20">
        <div className="py-2 w-50 text-white bg-yellow-600 text-center rounded-md cursor-pointer">
          Get Hint
        </div>

        {/* SUBMIT TRIGGERS MODAL */}
        <div
          onClick={() => setShowModal(true)}
          className="py-2 w-50 text-white bg-green-600 text-center rounded-md cursor-pointer"
        >
          Submit Answer
        </div>
      </div>

      {/* ================== MODAL ================== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-yellow-600 p-6 rounded-2xl w-100 text-center shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Endurance Run Complete!</h2>
            <p className="mb-6 text-white/90">Great Effort!</p>

            <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-10">
            
            <div className="border border-green-600 w-40 h-30 rounded-2xl">
            <div className="mt-2"> 🧩 </div>
            <div className="text-white text-1xl text-center mt-2"> Puzzles Solved </div>
            <div className="text-white text-2xl text-center mt-2"> 12 </div>
            </div>
            <div className="border border-green-600 w-40 h-30 rounded-2xl">
              <div className="mt-2"> 🔥 </div>
            <div className="text-white text-1xl text-center mt-2"> Max Streak</div>
            <div className="text-white text-2xl text-center mt-2"> 8 </div>
            </div>

            <div className="border border-green-600 w-40 h-30 rounded-2xl">
              <div className="mt-2"> ⭐ </div>
            <div className="text-white text-1xl text-center mt-2">  Points Earned</div>
            <div className="text-white text-2xl text-center mt-2"> 120 </div>
            </div>
            <div className="border border-green-600 w-40 h-30 rounded-2xl">
              <div className="mt-2"> ⏱️ </div>
            <div className="text-white text-1xl text-center mt-2">  Time Survived</div>
            <div className="text-white text-2xl text-center mt-2"> 4:20 </div>
            </div>
            <Link to="">
            <div className="text-yellow-600  hover:text-yellow-400">[Play Again]</div>
            </Link>
            <Link to="/Dashboard">
            <div className="text-yellow-600 hover:text-yellow-400">[Dashboard]</div>  
            </Link>
          </div>
        </div>
          </div> 

        </div>
      )}
    </div>
  );
};

export default Endurance;
