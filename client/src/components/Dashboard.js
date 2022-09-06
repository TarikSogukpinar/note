import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Container from "react-bootstrap/esm/Container";
import Login from "./Login";
import Register from "./Register";
import ProfilePrivateRoutes from "../constants/ProfilePrivateRoute";
import NotesPrivateRoutes from "../constants/NotesPrivateRoutes";
import CreateNote from "./CreateNote";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
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
          <Route exact path="/createnote" element={<CreateNote></CreateNote>}></Route>
        </Routes>
      </Container>
    </div>
  );
}
