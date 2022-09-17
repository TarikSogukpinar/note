import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Container from "react-bootstrap/esm/Container";
import ProfilePrivateRoutes from "../constants/ProfilePrivateRoute";
import NotesPrivateRoutes from "../constants/NotesPrivateRoutes";
import LoginPrivateRoutes from "../constants/LoginPrivateRoutes";
import RegisterPrivateRoutes from "../constants/RegisterPrivateRoutes";
import CreateNotePrivateRoutes from "../constants/CreateNotesPrivateRoutes";
import NotFound from "./NotFound";
import EditNote from "./EditNote";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          exact
          path="/login"
          element={<LoginPrivateRoutes></LoginPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/register"
          element={<RegisterPrivateRoutes></RegisterPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/profile"
          element={<ProfilePrivateRoutes></ProfilePrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/notes"
          element={<NotesPrivateRoutes></NotesPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/createnote"
          element={<CreateNotePrivateRoutes></CreateNotePrivateRoutes>}
        ></Route>
        <Route exact path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/edit/:id" element={<EditNote></EditNote>}></Route>
      </Routes>
    </div>
  );
}
