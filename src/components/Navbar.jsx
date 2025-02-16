import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="w-full flex items-center bg-white py-10 px-5 z-50">
      <div className="flex flex-col w-full font-inter font-black text-[25.95px] line-[42.27px]">
        <Link to="/">#VANLIFE</Link>
      </div>
      <nav className="flex items-center font-semibold gap-10 font-inter text-[#4D4D4D]">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
