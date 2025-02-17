import { motion } from "motion/react";

export default function Loading() {
  return (
    <main className="z-100 flex min-h-screen flex-col items-center">
      <div className="flex">
        <h1 className="text-3xl font-bold"> Loading ...</h1>
        <motion.h1
          className="text-5xl"
          animate={{ rotate: 180 }}
          transition={{ type: "spring", duration: 1, repeat: 5 }}
        >
          ⏳
        </motion.h1>
      </div>
    </main>
  );
}
