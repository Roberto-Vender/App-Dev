import React from "react";
import { Link } from "react-router-dom";
import NewHeader from "../components/NewHeader";


const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-black font-poppins font-semibold">
      <NewHeader />

      {/* Title */}
      <div className="text-center text-4xl mt-10 text-white">
        Welcome to Puzzle Master!
      </div>

      {/* Subtitle */}
      <div className="text-center text-red-700 text-xl mt-3">
        Ready to challenge your brain?
      </div>

      {/* Boxes Section */}
      <div className="flex justify-center gap-10 mt-12 flex-wrap">

        {/* SINGLE PLAYER */}
        <div className="flex flex-col items-center bg-gray-600 text-blue-500 rounded-2xl w-80 p-6 hover:scale-105 duration-200">
          <div className="text-xl">Single Player Journey</div>

          <span className="text-sm text-white mt-2 text-center">
            Solve at your own pace
          </span>

          <svg className="mt-10" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.0916 34.9584V51.625M74.425 43.2917H57.7583M33.2041 16.1959H66.7916C72.5594 16.197 78.0905 18.489 82.1685 22.5678C86.2465 26.6466 88.5375 32.1781 88.5375 37.9459V72.3834C88.5375 81.0292 77.9833 85.2375 72.0291 78.9709L59.6291 65.9125H40.3625L28.3833 80.3292C22.6583 87.2209 11.4541 83.1709 11.4541 74.2167V37.9417C11.4552 32.1747 13.7467 26.6442 17.8246 22.5663C21.9025 18.4884 27.4371 16.197 33.2041 16.1959Z" stroke="#2996E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M38.9083 43.2917C36.6071 43.2917 34.7416 41.4262 34.7416 39.125C34.7416 36.8239 36.6071 34.9584 38.9083 34.9584C41.2095 34.9584 43.075 36.8239 43.075 39.125C43.075 41.4262 41.2095 43.2917 38.9083 43.2917Z" fill="#2996E2"/>
            <path d="M29.7417 52.4583C27.4405 52.4583 25.575 50.5929 25.575 48.2917C25.575 45.9905 27.4405 44.125 29.7417 44.125C32.0428 44.125 33.9083 45.9905 33.9083 48.2917C33.9083 50.5929 32.0428 52.4583 29.7417 52.4583Z" fill="#2996E2"/>
            </svg>

          <Link to="/ChoosePuzzle">
          <button className="bg-blue-700 text-white rounded-2xl px-20 py-2 mt-12 hover:bg-blue-500 duration-200 cursor-pointer  ">
            Play now
          </button>
          </Link>
        </div>

        {/* ENDURANCE */}
        <div className="flex flex-col items-center bg-gray-600 text-yellow-500 rounded-2xl w-80 p-6 hover:scale-105 duration-200">
          <div className="text-xl">Endurance Challenge</div>

          <span className="text-sm text-white mt-2 text-center">
            Continuous puzzles with increasing difficulty and timer
          </span>

          <svg className="mt-10" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M66.0918 34.9584V51.625M74.4251 43.2917H57.7584M33.2043 16.1959H66.7918C72.5595 16.197 78.0906 18.489 82.1686 22.5678C86.2467 26.6466 88.5376 32.1781 88.5376 37.9459V72.3834C88.5376 81.0292 77.9834 85.2375 72.0293 78.9709L59.6293 65.9125H40.3626L28.3834 80.3292C22.6584 87.2209 11.4543 83.1709 11.4543 74.2167V37.9417C11.4554 32.1747 13.7468 26.6442 17.8247 22.5663C21.9026 18.4884 27.4372 16.197 33.2043 16.1959Z" stroke="#F7C730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.9085 43.2917C36.6073 43.2917 34.7419 41.4262 34.7419 39.125C34.7419 36.8239 36.6073 34.9584 38.9085 34.9584C41.2097 34.9584 43.0752 36.8239 43.0752 39.125C43.0752 41.4262 41.2097 43.2917 38.9085 43.2917Z" fill="#F7C730"/>
        <path d="M29.7418 52.4583C27.4406 52.4583 25.5751 50.5929 25.5751 48.2917C25.5751 45.9905 27.4406 44.125 29.7418 44.125C32.043 44.125 33.9084 45.9905 33.9084 48.2917C33.9084 50.5929 32.043 52.4583 29.7418 52.4583Z" fill="#F7C730"/>
        </svg>

          <Link to="/Endurance">
          <button className="bg-yellow-700 text-white rounded-2xl px-20 py-2 mt-6 hover:bg-yellow-500 duration-200 cursor-pointer">
            Play now
          </button>
          </Link>   
          
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
