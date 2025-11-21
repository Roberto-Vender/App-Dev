import { Link } from "react-router-dom";

function LogicHeader() {
  return (
    <div className="flex items-center  w-full px-8">
      {/* Logo Image */}
      <img src="logo.png" className="w-25 h-25 mt-3" />

      {/* Navigation + Buttons */}
      <div className="flex items-center gap-6">
        <span className="text-2xl font-bold mb-11 -ml-4">Puzzle Master</span>

        {/* RIDDLES centered */}
        <span className="text-2xl font-bold mb-11 ml-80 text-blue-600" >LOGIC</span>

        {/* Buttons */}
        <Link to="/Login">
          <button className="px-5 py-1 bg-blue-600 text-white mb-10 rounded-md hover:bg-red-700 font-semibold ml-90">
            🏆 1000 Points 
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LogicHeader;
