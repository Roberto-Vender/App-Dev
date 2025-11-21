function Footer() {
  return (
    <div className="border-t-2 border-green-600 flex flex-col items-center justify-center py-4">
      {/* Logo Image */}
      <img src="logo.png" className="w-30 h-30 -mb-10" />

      {/* Text */}
      <div className="flex items-center justify-center">
        <span className="text-lg font-normal text-center mr-10">
          Puzzle Master
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-lg font-normal text-center mr-10">
          An AI-powered puzzle experience that challenges your mind<br></br> with real-time riddles, logic problems, and brain teasers.
        </span>
      </div>
       <span className="text-lg font-normal text-center mr-10 mt-4">
           © 2025 Puzzle Master. All rights reserved.
        </span>
      </div>
  
    
  );
}

export default Footer;
