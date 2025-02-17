import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router";
import buttonClasses from "../../../../utils";

export default function HostVansDetail() {
  const [hostVan, setHostVan] = useState([]);
  const { hostId } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${hostId}`)
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, [hostId]);

  console.log(hostVan);

  const navLinks = [
    {
      path: "#",
      name: "Details",
    },
    {
      path: "#",
      name: "Pricing",
    },
    {
      path: "#",
      name: "Photos",
    },
  ];

  return (
    <main className="mt-10 flex min-h-screen w-full flex-col">
      <span className="pb-10 text-[15px] font-medium">
        <Link to="/host/vans" className="hover:underline">
          ⬅ Back to all vans
        </Link>
      </span>
      <section className="mb-10 flex w-full flex-col rounded-[5px] bg-white shadow-[0_0_3px]">
        {hostVan.map((van) => (
          <>
            <section className="flex p-5" key={van.id}>
              <img src={van.imageUrl} alt="" className="size-[160px] rounded" />
              <div className="flex w-full flex-col px-5 py-3">
                <div>
                  <button className={buttonClasses(van.type)}>
                    {van.type}
                  </button>
                  <h1 className="mt-3 mb-1 text-2xl font-bold">{van.name}</h1>
                  <span>
                    <span className="text-xl font-medium">${van.price}</span>
                    /day
                  </span>
                </div>
              </div>
            </section>
            <div className="flex gap-7 px-5 py-3">
              {navLinks.map((link) => (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[#4D4D4D] transition-all hover:font-black ${isActive ? "font-bold underline" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-5 p-5">
              <span>
                <span className="font-bold">Name:</span>{" "}
                <span className="font-medium">{van.name}</span>
              </span>
              <span>
                <span className="font-bold">Category:</span>{" "}
                <span className="font-medium capitalize">{van.type}</span>
              </span>
              <span className="text-justify">
                <span className="font-bold">Description:</span>{" "}
                <span className="text-[14px] font-medium">
                  {van.description}
                </span>
              </span>
              <span>
                <span className="font-bold">Visibility:</span>{" "}
                <span className="text-[14px] font-medium">Public</span>
              </span>
            </div>
          </>
        ))}
      </section>
    </main>
  );
}
