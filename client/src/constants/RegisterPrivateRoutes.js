import React from "react";
import { Navigate } from "react-router";
import Register from "../components/Register";

export default function RegisterPrivateRoutes() {
  const auth = localStorage.getItem("token");
  return !auth ? <Register></Register> : <Navigate to="/" />;
}
