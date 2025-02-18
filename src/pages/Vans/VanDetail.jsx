import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import buttonClasses from "../../utils";
import Loading from "../../components/Loading";
import { motion } from "motion/react";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const search = location.state?.search || "";

  const typeName = location.state?.type || "all";

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <main className="flex min-h-screen flex-col items-center px-3">
      {van ? (
        <>
          <div className="flex w-full">
            <Link to={`..${search}`} relative="path" className="px-8">
              ⬅ Back to {typeName} vans
            </Link>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }} // Start small and hidden
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={van.imageUrl}
            alt={van.name}
            className="my-10 rounded-xl shadow-[0_0_3px] sm:size-[600px] md:size-[700px] lg:size-[800px]"
          />
          <div className="w-full px-3 sm:w-[600px] md:w-[700px] lg:w-[800px]">
            <button className={`${buttonClasses(van.type)} mb-5`}>
              {van.type}
            </button>
            <h1 className="text-4xl font-bold">{van.name}</h1>
            <div className="my-5">
              <span className="text-2xl font-bold">${van.price}</span>
              <span>/day</span>
            </div>
            <p className="w-full text-justify font-medium sm:w-[600px] md:w-[700px] lg:w-[800px]">
              {van.description}
            </p>
            <button className="my-8 h-[50px] w-full rounded bg-[#FF8C38] text-white sm:w-[600px] md:w-[700px] lg:w-[800px]">
              Rent this van
            </button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
