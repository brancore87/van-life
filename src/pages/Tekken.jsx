import { Link, useSearchParams } from "react-router";

const tekkenCharacters = [
  {
    name: "Hwoarang",
    style: "Taekwondo",
  },
  {
    name: "Baek",
    style: "Taekwondo",
  },
  {
    name: "Jin",
    style: "Karate",
  },
  {
    name: "Mishima",
    style: "Karate",
  },
];

const filterButtons = [
  {
    path: "taekwondo",
    name: "Taekwondo",
  },
  {
    path: "karate",
    name: "Karate",
  },
  {
    path: null,
    name: "Clear",
  },
];

export default function Tekken() {
  const [searchParams, setSearchParams] = useSearchParams();
  const styleFilter = searchParams.get("style");

  const displayedCharacters = styleFilter
    ? tekkenCharacters.filter(
        (char) => char.style.toLowerCase() === styleFilter,
      )
    : tekkenCharacters;

  const tekkenElements = displayedCharacters.map((char) => (
    <div key={char.name} className="w-[250px] p-3">
      <div className="rounded px-2 py-1 shadow-[0_0_3px]">
        <h2
          className={`text-xl font-bold ${char.style.toLowerCase() === "taekwondo" ? "text-red-500" : "text-blue-500"}`}
        >
          Name: {char.name}
        </h2>
        <p>Style: {char.style}</p>
      </div>
    </div>
  ));

  function generateNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-2xl font-black">
        <span className="text-red-500">Tekken </span>
        <span className="text-blue-500">Characters</span>
      </h1>
      <div className="flex gap-5">
        {filterButtons.map((button) => (
          <Link
            to={generateNewSearchParamString("style", button.path)}
            key={button.name}
            className={`cursor-pointer rounded-md border p-2 shadow-[0_0_3px] ${button.name.toLowerCase() === "taekwondo" ? "text-red-500" : button.name.toLowerCase() === "karate" ? "text-blue-500" : ""}`}
          >
            {button.name}
          </Link>
          // <button
          //   onClick={() => setSearchParams({ style: button.path })}

          //   key={button.name}
          //   className={`cursor-pointer rounded-md border p-2 shadow-[0_0_3px] ${button.name.toLowerCase() === "taekwondo" ? "text-red-500" : button.name.toLowerCase() === "karate" ? "text-blue-500" : ""}`}
          // >
          //   {button.name}
          // </button>
        ))}
        {/* <button
          className="cursor-pointer rounded-md border p-2 shadow-[0_0_3px]"
          onClick={() => setSearchParams({})}
        >
          Clear
        </button> */}
      </div>
      {tekkenElements}
    </main>
  );
}
