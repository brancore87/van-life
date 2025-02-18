import React from "react";
import { useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <main className="my-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-500">Error 😲</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </main>
  );
}
