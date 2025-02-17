import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../../../components/Loading";
import { motion } from "motion/react";

export default function HostVansDetail() {
  const [hostVan, setHostVan] = useState(null);
  const { hostId } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${hostId}`)
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, [hostId]);

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
            <>
              <div className="flex flex-col gap-5 px-5 pt-2">
                <span>
                  <span className="font-bold">Name:</span>{" "}
                  <span className="font-medium">{hostVan.name}</span>
                </span>
                <span>
                  <span className="font-bold">Category:</span>{" "}
                  <span className="font-medium capitalize">{hostVan.type}</span>
                </span>
                <span className="text-justify">
                  <span className="font-bold">Description:</span>{" "}
                  <span className="text-[14px] font-medium">
                    {hostVan.description}
                  </span>
                </span>
                <span>
                  <span className="font-bold">Visibility:</span>{" "}
                  <span className="text-[14px] font-medium">Public</span>
                </span>
              </div>
            </>
          </motion.section>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
