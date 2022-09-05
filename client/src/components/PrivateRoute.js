import React from "react";
import { Navigate } from "react-router-dom";
import Profile from "./Profile";

export default function PrivateRoute() {
  const auth = localStorage.getItem("user");

  return auth ? <Profile /> : <Navigate to="/login" />;
}
