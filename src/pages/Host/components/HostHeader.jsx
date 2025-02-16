import React from "react";
import { NavLink } from "react-router";

export default function HostHeader() {
  const navLinks = [
    {
      path: "income",
      name: "Income",
    },
    {
      path: "host-vans",
      name: "Vans",
    },
    {
      path: "reviews",
      name: "Reviews",
    },
  ];

  return (
    <nav className="font-inter flex items-center gap-10 font-semibold text-[#4D4D4D]">
      <NavLink
        to="/host"
        end
        className={({ isActive }) =>
          `transition-all hover:text-black ${isActive ? "font-black underline" : ""}`
        }
      >
        Dashboard
      </NavLink>
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
  );
}
