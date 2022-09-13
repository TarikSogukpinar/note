import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNote, updateNote } from "../services/noteService";
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
    const getNotes = async () => {
      const token = localStorage.getItem("token");
      if (id) {
        const res = await getNote(id, token);
        setNote({
          title: res.data.title,
          content: res.data.content,
          category: res.data.category,
          id: res.data._id,
        });
      }
    };
    getNotes();
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
        // const { title, category, content, id } = note;
     
        updateNote(note.id, note.title, note.category, note.content, token)
          .then((res) => {
            window.location.href = "/notes";
          })
          .catch((error) => {
            alert("hata");
            console.log(error.response);
          });
  
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
            <Form.Group controlId="formBasicTitle">
              <Form.Label className="form-label">Title</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={note.title}
                htmlFor="title"
                name="title"
                required
                onChange={onChangeInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
              <Form.Label className="form-label">Category</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={note.category}
                htmlFor="category"
                name="category"
                required
                rows="10"
                onChange={onChangeInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label className="form-label">Content</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={note.content}
                htmlFor="content"
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
