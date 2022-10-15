import React from "react";
import { Navigate } from "react-router-dom";
import EditUserInfo from "../components/EditUserInfo";
import Cookies from "js-cookie";

export default function EditUserInfoPrivateRoutes() {
  const auth = Cookies.get("jwt");
  return auth ? <EditUserInfo /> : <Navigate to="/login" />;
}
