import React from "react";
import { Link } from "react-router";

export default function HostHeader() {
  return (
    <nav className="font-inter flex items-center gap-10 font-semibold text-[#4D4D4D]">
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/host-vans">Vans</Link>
      <Link to="/host/reviews">Reviews</Link>
    </nav>
  );
}
