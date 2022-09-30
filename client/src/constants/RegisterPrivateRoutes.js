import React from "react";
import { Navigate } from "react-router";
import Register from "../components/Register";
import Cookies from "js-cookie";

export default function RegisterPrivateRoutes() {
  const auth = !Cookies.get();
  return !auth ? <Register></Register> : <Navigate to="/" />;
}
