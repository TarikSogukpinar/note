import React from "react";
import { Navigate } from "react-router-dom";
import CreateNote from "../components/CreateNote";
import Cookies from "js-cookie";
export default function CreateNotePrivateRoutes() {
  const auth = Cookies.get();
  return auth ? <CreateNote /> : <Navigate to="/login" />;
}
