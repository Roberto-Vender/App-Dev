import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center">
      {/* Logo Image */}
      <img src="logo.png" className="w-25 h-25 ml-8 mt-3" />

      {/* Navigation + Buttons */}
      <div className="flex items-center gap-6">
      <span className="text-2xl font-bold mb-11 -ml-4">Puzzle Master</span>
        {/* Navigation*/}
        <NavLink
          to="/Homepage"
          className={({ isActive }) =>
            `text-lg font-medium cursor-pointer mb-10 ml-15 ${
              isActive ? "text-red-600" : "text-white"
            }`
          }
        >
          Home
        </NavLink>

        <a href="#Features" className="text-lg font-medium cursor-pointer mb-10 ml-15 text-white hover:text-red-600">
        Features
      </a>

        <a href="#HowToPlay" className="text-lg font-medium cursor-pointer mb-10 ml-15 text-white hover:text-red-600">
        How to Play
      </a>

        <NavLink
          to="/LeaderBoard"
          className={({ isActive }) =>
            `text-lg font-medium cursor-pointer mb-10 ml-15 ${
              isActive ? "text-red-600" : "text-white"
            }`
          }
        >
          LeaderBoard
        </NavLink>


        {/* Buttons */}
        <Link to="/Register">
        <button className="px-5 py-1 bg-black-600 border border-red-600 text-white mb-10 ml-20 rounded-md hover:bg-red-700 font-semibold">
          Sign Up 
        </button>
        </Link>
        <Link to="/Login">
        <button className="px-7 py-1 bg-black-500 border border-red-600 text-white mb-10 ml-5 rounded-md hover:bg-red-600 font-semibold">
          Sign In
        </button>
        </Link>
      </div>
    </div>
    
  );
}


export default Header;
