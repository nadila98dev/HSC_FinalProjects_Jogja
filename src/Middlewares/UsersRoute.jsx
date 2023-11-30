import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function UsersRoute({ children }) {
  let token = Cookies.get("X-TOKEN");

  if (token) return <Navigate to="/" replace={true} />;

  return children || <Outlet />;
}
