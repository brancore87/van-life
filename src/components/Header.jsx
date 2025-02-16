import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  const navLinks = [
    {
      path: "/host",
      name: "Host",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/vans",
      name: "Vans",
    },
  ];
  return (
    <header className="w-fullitems-center z-50 flex px-5 py-10">
      <div className="font-inter line-[42.27px] flex w-full flex-col text-[25.95px] font-black">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "before:text-amber-500 before:content-['#']" : "before:text-black before:content-['#']"} `
          }
        >
          VANLIFE
        </NavLink>
      </div>
      <nav className="font-inter flex items-center gap-10 font-semibold text-[#4D4D4D]">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `transition-all hover:text-black ${isActive ? "font-black underline" : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
