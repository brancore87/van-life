import { Outlet } from "react-router";
import HostHeader from "./HostHeader";

export default function HostLayout() {
  return (
    <main className="px-5">
      <HostHeader />
      <Outlet />
    </main>
  );
}
