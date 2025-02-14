import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex relative bg-center flex-col items-center min-h-screen bg-[url(./vanlife.png)] bg-repeat-round px-10">
        <h1 className="text-[36px] text-[#FFFFFF] mt-40 font-inter font-extrabold leading-[42px]">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-inter text-[#FFFFFF] my-10 font-[500] line-[24px] text-[16px]">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip
        </p>
        <button className="bg-[#FF8C38] w-[95%] font-inter font-bold py-3 rounded-md text-white">
          Find your van
        </button>
      </main>
      <Footer />
    </>
  );
}
