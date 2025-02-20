import React from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthRequired() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="login" />;
  }
  return <Outlet />;
}
