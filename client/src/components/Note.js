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
import {IoCreateSharp} from "react-icons/io5"
import axios from "axios";
import "../styles/Note.css";

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

  return (
    <div>
      <Container className="d-inline-flex p-2 bd-highlight">
        <Row className="justify-content-end">
          <Col className="p-3">
            <Button size="xs" variant="link" bg="dark" href="/createnote">
              <IoCreateSharp></IoCreateSharp> Create Note
            </Button>
          </Col>
        </Row>
      </Container>

      {notes.map((note) => (
        <Container key={note._id}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{note.category}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <h4>{note.title}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>{note.content}</h5>
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
