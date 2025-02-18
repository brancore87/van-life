import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useResolvedPath,
  useSearchParams,
} from "react-router";
import buttonClasses from "../../utils";
import Loading from "../../components/Loading";
import { motion } from "motion/react";

const vanType = [
  {
    name: "Simple",
    path: "simple",
  },
  {
    name: "Rugged",
    path: "rugged",
  },
  {
    name: "Luxury",
    path: "luxury",
  },
];

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans/")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElement = displayedVans.map((van) => (
    <ul key={van.id} className="my-5">
      <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }} // Start small and hidden
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
          transition={{ duration: 0.5, ease: "anticipate" }}
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
    <>
      {vans.length > 0 ? (
        <main className="flex min-h-screen flex-col items-center text-black">
          <h1 className="w-full px-10 text-[32px] font-bold">
            Explore our van options
          </h1>
          <section className="mt-5 mb-10 flex gap-3">
            {vanType.map((van) => (
              <button
                key={van.name}
                className={`rounded-filter cursor-pointer px-3 py-2 shadow-[0_0_3px] ${van.path === typeFilter ? buttonClasses(van.path) : ""}`}
                onClick={() => setSearchParams({ type: van.path })}
              >
                {van.name}
              </button>
            ))}
            {typeFilter && (
              <button
                className="rounded-filter cursor-pointer px-3 py-2 shadow-[0_0_2px] hover:shadow-[0_0_3px]"
                onClick={() => setSearchParams({})}
              >
                Clear
              </button>
            )}
          </section>
          <section className="top-15 left-10 mx-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vansElement}
          </section>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
