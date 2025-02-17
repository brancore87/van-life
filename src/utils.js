import clsx from "clsx";

const buttonClasses = (type) =>
  clsx(
    "capitalize text-white text-black hover:text-[#FFEAD0] focus:outline-none px-4 py-2 rounded",
    {
      "bg-[#E17654] hover:bg-[#E17654]": type === "simple",
      "bg-[#115E59] hover:bg-[#115E59]": type === "rugged",
      "bg-[#161616] hover:bg-[#161616]": type === "luxury",
    },
  );

export default buttonClasses;
