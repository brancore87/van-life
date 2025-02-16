import { Outlet } from "react-router";
import HostHeader from "./HostHeader";

export default function HostLayout() {
  return (
    <>
      <HostHeader />
      <Outlet />
    </>
  );
}
