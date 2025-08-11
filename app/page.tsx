import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="bg-black h-screen w-full">
      {/* navbar */}
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/ValueVault.png"
            alt="Logo"
            className="w-52 h-12"
          />
        </div>
        <div className="flex gap-6 items-center">
          <a href="#about" className="relative group text-[#05d9e7] hover:text-[#04c7d3] transition-colors">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#05d9e7] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="login"
            className="px-4 py-2 border border-[#ea1619] text-[#ea1619] rounded-lg hover:bg-[#ea1619] hover:text-white shadow-md hover:shadow-[#ea1619]/50 transition-all duration-300"
          >
            Login
          </a>
          <a
            href="signup"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#05d9e7] to-[#04c7d3] text-black font-medium hover:from-[#04c7d3] hover:to-[#03b9c6] shadow-lg shadow-[#05d9e7]/40 transition-all duration-300"
          >
            Signup
          </a>
        </div>

      </div>
      {/* body */}
      <div className="">

      </div>
    </div>

  );
};

export default Homepage;
