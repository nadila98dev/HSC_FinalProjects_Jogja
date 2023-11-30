import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
  let token = Cookies.get("X-TOKEN");
  console.log(token);

  if (!token) return <Navigate to="/login" replace={true} />;

  return children || <Outlet />;
}
