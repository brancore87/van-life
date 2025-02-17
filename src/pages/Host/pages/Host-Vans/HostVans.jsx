import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <h1 className="mt-15 mb-5 w-full text-[32px] font-bold">
        Your listed Vans
      </h1>

      {hostVans.map((vans) => (
        <section className="my-3 h-[105px] w-full rounded-[5px] bg-white px-3">
          <NavLink
            to={`/host/vans/${vans.id}`}
            className="flex h-full w-full items-center px-5 py-10"
          >
            <img
              src={vans.imageUrl}
              alt=""
              className="size-[65px] rounded-[5px] p-0.5 shadow-[0_0_2px]"
            />
            <div className="mx-5">
              <h2 className="text-xl font-semibold">{vans.name}</h2>
              <span className="text-[#4D4D4D]">${vans.price}/day</span>
            </div>
          </NavLink>
        </section>
      ))}
    </main>
  );
}
