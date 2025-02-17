import { motion } from "motion/react"; // ✅ Correct import

export default function App() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -50 }} // Start position (hidden and slightly above)
      animate={{ opacity: 1, y: 0 }} // End position (fully visible and normal position)
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      className="relative flex min-h-screen flex-col items-center bg-[url('/vanlife.png')] bg-cover bg-center bg-no-repeat px-10"
    >
      <h1 className="font-inter mt-[75px] text-[36px] leading-[42px] font-extrabold text-white">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="font-inter my-10 text-[16px] leading-[24px] font-medium text-white">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="font-inter w-[95%] rounded-md bg-[#FF8C38] py-3 font-bold text-white">
        Find your van
      </button>
    </motion.main>
  );
}
