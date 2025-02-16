import React from "react";

export default function About() {
  return (
    <main>
      <img
        src="/public/vanlife2.png"
        alt=""
        className="w-full object-cover h-75"
      />
      <article className="px-5 font-inter">
        <h1 className="text-[36px] text-[#000000] mt-10 font-bold leading-[42px]">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="paragraph">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="paragraph">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </article>
      <section className="bg-[#FFCC8D] relative flex items-center justify-center flex-col p-10 m-10 rounded-md">
        <h3 className="font-bold text-2xl mb-10 text-[#161616]">
          Your destination is waiting. Your van is ready.
        </h3>
        <button className="bg-[#161616] px-5 bottom-5 absolute  left-10 font-inter font-bold py-3 rounded-md text-white ">
          Explore our vans
        </button>
      </section>
    </main>
  );
}
