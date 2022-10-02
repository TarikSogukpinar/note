import React from "react";
import { Navigate } from "react-router";
import Login from "../components/Login";
import Cookies from "js-cookie";

export default function LoginPrivateRoutes() {
  const auth = !Cookies.get("jwt");
  return auth ? <Login></Login> : <Navigate to="/" />;
}
