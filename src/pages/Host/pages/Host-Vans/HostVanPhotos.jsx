import React from "react";
import { useOutletContext } from "react-router";
import { motion } from "motion/react";

export default function HostVansPricing() {
  const [hostVan] = useOutletContext();

  return (
    <>
      {hostVan ? (
        <main className="flex w-full flex-col">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mb-10 flex w-full flex-col rounded-[5px] bg-white"
          >
            <div className="flex flex-col gap-5 p-5">
              <img
                src={hostVan.imageUrl}
                alt="image"
                className="size-[105px]"
              />
            </div>
          </motion.section>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
