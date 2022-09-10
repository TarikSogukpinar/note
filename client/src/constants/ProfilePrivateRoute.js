import React from "react";
import { Navigate } from "react-router-dom";
import Profile from "../components/Profile";

export default function profilePrivateRoute() {
  const auth = localStorage.getItem("token");
  return auth ? <Profile /> : <Navigate to="/login" />;
}
