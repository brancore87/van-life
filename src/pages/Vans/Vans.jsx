import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import buttonClasses from "../../utils";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans/")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElement = vans.map((van) => (
    <ul key={van.id} className="my-5">
      <Link to={`/vans/${van.id}`}>
        <img
          src={van.imageUrl}
          alt={van.name}
          className="size-[350px] rounded-[5px] shadow-[0_0_2px] sm:size-[400px]"
        />
        <div className="my-3 flex w-full justify-between">
          <div className="flex flex-col">
            <h3 className="font-semibold">{van.name}</h3>

            <button className={buttonClasses(van.type)}>{van.type}</button>
          </div>
          <div>
            <p className="font-semibold">${van.price}</p>
            <span className="line-clamp-6 font-[500]">/day</span>
          </div>
        </div>
      </Link>
    </ul>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center text-black">
      <h1 className="w-full px-10 text-[32px] font-bold">
        Explore our van options
      </h1>
      <section className="mt-5 mb-10 flex gap-1">
        <button className="bg-filter rounded-filter w-filter-width h-filter-height">
          Simple
        </button>
        <button className="bg-filter rounded-filter w-filter-width h-filter-height">
          Luxury
        </button>
        <button className="bg-filter rounded-filter w-filter-width h-filter-height">
          Rugged
        </button>
      </section>
      <section className="top-15 left-10 mx-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {vansElement}
      </section>
    </main>
  );
}
