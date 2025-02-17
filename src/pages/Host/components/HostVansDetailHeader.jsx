import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router";
import buttonClasses from "../../../utils";

import { motion } from "motion/react";
import Loading from "../../../components/Loading";

export default function HostVansDetailHeader() {
  const [hostVan, setHostVan] = useState(null);
  const { hostId } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${hostId}`)
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, [hostId]);

  const navLinks = [
    {
      path: "pricing",
      name: "Pricing",
    },
    {
      path: "photos",
      name: "Photos",
    },
  ];

  return (
    <>
      {hostVan ? (
        <main className="mt-10 flex w-full flex-col">
          <span className="pb-10 text-[15px] font-medium">
            <Link to=".." relative="path" className="hover:underline">
              ⬅ Back to all vans
            </Link>
          </span>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex w-full flex-col rounded-[5px] bg-white shadow-[0_0_3px]"
          >
            <>
              <section className="flex p-5" key={hostVan.id}>
                <motion.img
                  initial={{ opacity: 0, y: 0, x: -50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                  src={hostVan.imageUrl}
                  alt=""
                  className="size-[160px] rounded"
                />
                <motion.div
                  initial={{ opacity: 0, y: 0, x: 100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1.8, ease: "easeIn" }}
                  className="flex w-full flex-col px-5 py-3"
                >
                  <div>
                    <button className={buttonClasses(hostVan.type)}>
                      {hostVan.type}
                    </button>
                    <h1 className="mt-3 mb-1 text-2xl font-bold">
                      {hostVan.name}
                    </h1>
                    <span>
                      <span className="text-xl font-medium">
                        ${hostVan.price}
                      </span>
                      /day
                    </span>
                  </div>
                </motion.div>
              </section>
              <div className="flex gap-7 px-5 py-3">
                <NavLink
                  to="."
                  end
                  className={({ isActive }) =>
                    `text-[#4D4D4D] transition-all hover:font-black hover:underline ${isActive ? "font-bold underline" : ""}`
                  }
                >
                  Details
                </NavLink>
                {navLinks.map((link) => (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[#4D4D4D] transition-all hover:font-black hover:underline ${isActive ? "font-bold underline" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </>
            <div className="size-[252px] w-full">
              <Outlet />
            </div>
          </motion.section>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
