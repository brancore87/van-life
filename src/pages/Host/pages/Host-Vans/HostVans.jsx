import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Loading from "../../../../components/Loading";
import { motion } from "motion/react";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <>
      {hostVans.length > 0 ? (
        <main className="flex min-h-screen w-full flex-col items-center">
          <h1 className="mt-15 mb-5 w-full text-[32px] font-bold">
            Your listed Vans
          </h1>

          {hostVans.map((vans) => (
            <motion.section
              key={vans.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="my-3 h-[105px] w-full rounded-[5px] bg-white px-3"
            >
              <NavLink
                to={vans.id}
                className="flex h-full w-full items-center px-5 py-10"
              >
                <motion.img
                  src={vans.imageUrl}
                  alt=""
                  className="size-[65px] rounded-[5px] p-0.5 shadow-[0_0_2px]"
                  initial={{ opacity: 0, y: 0, x: -100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.9, ease: "backIn" }}
                />
                <div className="mx-5">
                  <motion.h2
                    initial={{ opacity: 0, y: -100, x: 0 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1, ease: "anticipate" }}
                    className="text-xl font-semibold"
                  >
                    {vans.name}
                  </motion.h2>
                  <motion.h1
                    initial={{ opacity: 0, y: 100, x: 0 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8, ease: "circIn" }}
                    className="text-[#4D4D4D]"
                  >
                    ${vans.price}/day
                  </motion.h1>
                </div>
              </NavLink>
            </motion.section>
          ))}
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
