import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Container from "react-bootstrap/esm/Container";
import Login from "./Login";
import Register from "./Register";


export default function Dashboard() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Container>
    </div>
  );
}
