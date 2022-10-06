import React from "react";
import { Navigate } from "react-router-dom";
import Note from "../components/Note";
import Cookies from "js-cookie";
export default function NotesPrivateRoutes() {
  const auth = Cookies.get("jwt");
  return auth ? <Note /> : <Navigate to="/login" />;
}
