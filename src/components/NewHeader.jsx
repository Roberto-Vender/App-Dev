import { Link } from "react-router-dom";

function NewHeader() {
  return (
    <div className="flex items-center">
      {/* Logo Image */}
      <img src="logo.png" className="w-25 h-25 ml-8 mt-3" />

      {/* Navigation + Buttons */}
      <div className="flex items-center gap-6">
      <span className="text-2xl font-bold mb-11 -ml-4">Puzzle Master</span>

        {/* Buttons */}
        <Link to="/Login">
        <button className="px-5 py-1  bg-black-600 border bg-blue-600 text-white mb-10 ml-200 rounded-md hover:bg-red-700 font-semibold ">
          🏆 1000 Points 
        </button>
        </Link>
      </div>
    </div>
    
  );
}


export default NewHeader;
