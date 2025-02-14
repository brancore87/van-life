import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="fixed top-0 justify-between left-0 w-full flex items-center bg-white shadow-md p-10 z-50">
      {/* // <header className="flex items-center px-10 justify-between border-b w-full h-40 bg-[#FFF7ED]"> */}
      <div className="flex flex-col font-inter font-black text-[25.95px] line-[42.27px]">
        #VANLIFE
      </div>
      <nav className="flex items-center font-semibold gap-10 font-inter text-[#4D4D4D]">
        <Link to="/about">About</Link>
        <Link to="/">Vans</Link>
      </nav>
    </header>
  );
}
