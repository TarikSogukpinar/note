import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import {
  Accordion,
  Button,
  Col,
  Container,
  Row,
  Card,
  Nav,
  Badge,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { getAllNotes } from "../services/noteService";
import axios from "axios";
import "../styles/Note.css"

export default function Note() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get("http://localhost:5000/notes/getNotes", {
      headers: { Authorization: token },
    });
    setNotes(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  // console.log(notes);

  return (
    <div>
      <br></br>
      <Button href="/createnote">Create Notes</Button>
      <br></br>
      <h1 className="my-notes-text">My Notes</h1>
      {notes.map((note) => (
        <Container key={note._id}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Title : {note.title}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col xs={6}>
                    <p>Content : {note.content}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <p>Category :{note.category}</p>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      ))}
    </div>
  );
}
