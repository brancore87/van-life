import { motion } from "motion/react";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -50 }} // Start position (hidden and slightly below)
      animate={{ opacity: 1, y: 0, x: 0 }} // End position (fully visible and normal position)
      transition={{ duration: 0.8, ease: "anticipate" }}
    >
      <img src="vanlife2.png" alt="" className="h-75 w-full object-cover" />
      <article className="font-inter px-5">
        <h1 className="mt-10 text-[36px] leading-[42px] font-bold text-[#000000]">
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
      <section className="relative m-10 flex flex-col items-center justify-center rounded-md bg-[#FFCC8D] p-10">
        <h3 className="mb-10 text-2xl font-bold text-[#161616]">
          Your destination is waiting. Your van is ready.
        </h3>
        <button className="font-inter absolute bottom-5 left-10 rounded-md bg-[#161616] px-5 py-3 font-bold text-white">
          Explore our vans
        </button>
      </section>
    </motion.main>
  );
}
