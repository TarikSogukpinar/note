import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { updateNotes } from "../services/noteService";
import { FaUserEdit } from "react-icons/fa";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
export default function EditNote({ match, history }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
    id: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("token");
      if (id) {
        const res = await axios.get(
          `http://localhost:5000/notes/getNote/${id}`,
          {
            headers: { Authorization: token },
          }
        );
        setNote({
          title: res.data.title,
          content: res.data.content,
          category: res.data.category,
          id: res.data._id,
        });
      }
    };
    getNote();
    console.log(note);
  }, [id]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { title, category, content, id } = note;
        const newNote = {
          title,
          category,
          content,
        };
        await axios.put(
          `http://localhost:5000/notes/updateNote/${id}`,
          newNote,
          {
            headers: { Authorization: token },
          }
        );
        window.location.href = "/notes";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1 className="login-text text-dark shadow-sm text-warning mt-5 p-3 text-center rounded">
        <FaUserEdit /> Edit Note
      </h1>
      <Row>
        <Col
          lg={5}
          md={6}
          sm={12}
          className="p-5 m-auto shadow-lg rounded-lg"
          style={{ borderRadius: "15px" }}
        >
          <Form onSubmit={editNote} autoComplete="off">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Title</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={note.title}
                id="title"
                name="title"
                required
                onChange={onChangeInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="form-label">Category</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={note.category}
                id="category"
                name="category"
                required
                rows="10"
                onChange={onChangeInput}
              />
            </Form.Group>
            <Form.Group  className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Content</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={note.content}
                id="content"
                name="content"
                as="textarea"
                required
                rows={3}
                onChange={onChangeInput}
              />
            </Form.Group>
            <br></br>
            <Button size="lg" variant="dark btn-block" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}