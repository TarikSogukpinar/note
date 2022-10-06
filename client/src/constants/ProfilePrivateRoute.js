import React from "react";
import { Navigate } from "react-router-dom";
import Profile from "../components/Profile";
import Cookies from "js-cookie";
export default function profilePrivateRoute() {
  const auth = Cookies.get("jwt");
  return auth ? <Profile /> : <Navigate to="/login" />;
}
