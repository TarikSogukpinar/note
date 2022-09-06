import React from "react";
import { Navigate } from "react-router-dom";
import Note from "../components/Note";

export default function NotesPrivateRoutes() {
  const auth = localStorage.getItem("user");
  return auth ? <Note /> : <Navigate to="/login" />;
}
