import { Outlet } from "react-router";
import HostHeader from "./HostHeader";

export default function HostLayout() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <HostHeader />
      <Outlet />
    </main>
  );
}
