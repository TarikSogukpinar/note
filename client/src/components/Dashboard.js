import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Container from "react-bootstrap/esm/Container";
import ProfilePrivateRoutes from "../constants/ProfilePrivateRoute";
import NotesPrivateRoutes from "../constants/NotesPrivateRoutes";
import LoginPrivateRoutes from "../constants/LoginPrivateRoutes";
import RegisterPrivateRoutes from "../constants/RegisterPrivateRoutes";
import NoteFound from "./NoteFound";
import CreateNotePrivateRoutes from "../constants/CreateNotesPrivateRoutes";

export default function Dashboard() {
  return (
    <div>
      <Container>
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
          <Route exact path="*" element={<NoteFound></NoteFound>}></Route>
        </Routes>
      </Container>
    </div>
  );
}