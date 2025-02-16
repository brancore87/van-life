import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-fullitems-center z-50 flex px-5 py-10">
      <div className="font-inter line-[42.27px] flex w-full flex-col text-[25.95px] font-black">
        <Link to="/">#VANLIFE</Link>
      </div>
      <nav className="font-inter flex items-center gap-10 font-semibold text-[#4D4D4D]">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
