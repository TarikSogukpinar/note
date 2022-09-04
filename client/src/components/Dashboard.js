import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Container from "react-bootstrap/esm/Container";
import Login from "./Login";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Container>
    </div>
  );
}
