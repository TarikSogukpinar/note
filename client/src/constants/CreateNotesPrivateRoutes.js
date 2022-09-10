import React from "react";
import { Navigate } from "react-router-dom";
import CreateNote from "../components/CreateNote";

export default function CreateNotePrivateRoutes() {
  const auth = localStorage.getItem("token");
  return auth ? <CreateNote /> : <Navigate to="/login" />;
}
