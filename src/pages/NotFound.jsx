import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="my-10 text-3xl font-black">Page Not Found!</h1>
      <Link to="/" className="hover:underline">
        Go back Home
      </Link>
    </main>
  );
}
