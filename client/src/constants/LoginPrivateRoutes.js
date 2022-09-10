import React from "react";
import { Navigate } from "react-router";
import Login from "../components/Login";

export default function LoginPrivateRoutes() {
  const auth = localStorage.getItem("token");
  return !auth ? <Login></Login> : <Navigate to="/" />;
};


