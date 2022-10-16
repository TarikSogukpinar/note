import React, { useEffect, useState } from "react";
import { deletNotes } from "../services/noteService";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { IoCreateSharp } from "react-icons/io5";
import { MdDateRange, MdSubtitles } from "react-icons/md";
import { FaNotEqual, FaRegStickyNote, FaRegEdit } from "react-icons/fa";
import axios from "axios";
import "../styles/Note.css";
import { useSnackbar } from "react-simple-snackbar";
import Cookies from "js-cookie";

export default function Note() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");
  const [openSnackbar] = useSnackbar();

  const getNotes = async (token) => {
    const res = await axios.get("http://localhost:5000/api/notes/getNotes", {
      withCredentials: true,
    });
  
    setNotes(res.data);
  };

  useEffect(() => {
    const token = Cookies.get();
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  const deleteNote = async (id) => {
    try {
      const token = Cookies.get();
      if (token) {
        openSnackbar("Note Deleted!");
        setTimeout(function () {
          deletNotes(id, token);
          getNotes(token);
          window.location.reload(true);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        openSnackbar(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Container className="d-inline-flex p-2 bd-highlight">
        <Row className="justify-content-end">
          <Col className="p-3">
            <Button size="xs" variant="link" bg="dark" href="/createnote">
              <IoCreateSharp /> Create Note
            </Button>
          </Col>
        </Row>
      </Container>
      {notes != "" ? (
        notes.map((note, index) => (
          <Container key={index}>
            <Accordion defaultActiveKey="0" style={{ marginTop: 20 }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <MdSubtitles /> {note.category}
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <h4>{note.title} </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>{note.content}</h5>
                    </Col>
                  </Row>
                  <Container className="d-flex flex-row-reverse">
                    <Row className="justify-content-between">
                      <Col>
                        <Button
                          variant="link"
                          className="close"
                          onClick={() => deleteNote(note._id)}
                        >
                          <FaRegStickyNote /> Delete Note
                        </Button>
                        <Button
                          variant="link"
                          className="close"
                          href={`/edit/${note._id}`}
                        >
                          <FaRegEdit /> Edit Note
                        </Button>
                        <Button variant="link" className="close">
                          <MdDateRange /> {note.createdAt}
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        ))
      ) : (
        <h2>
          <FaNotEqual /> You have zero notes! Please Create Note
        </h2>
      )}
    </div>
  );
}
