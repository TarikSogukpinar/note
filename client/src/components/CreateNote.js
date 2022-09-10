import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AddNote } from "../services/noteService";
import axios from "axios";

export default function CreateNote() {
  const [data, setData] = useState({ title: "", content: "", category: "" });

  // const handleChange = (key) => (value) => {
  //   let valueTemp = value?.target ? value?.target?.value : value;
  //   setNote({ ...note, [key]: valueTemp });
  // };

  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { title, category, content } = data;
        const newNote = {
          title,
          content,
          category,
        };
        //AddNote(data.title, data.category, data.content)
        await axios
          .post("http://localhost:5000/notes/addNote", newNote, {
            headers: { Authorization: token },
          })
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
      <Row className="mt-5">
        <Col
          lg={5}
          md={6}
          sm={12}
          className="p-5 m-auto shadow-lg rounded-lg"
          style={{ borderRadius: "15px" }}
        >
          <Form onSubmit={handleAddNote}>
            <h1>Create New Note</h1>
            <br></br>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                onChange={handleChange("title")}
                placeholder="Enter Title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                name="content"
                onChange={handleChange("category")}
                type="text"
                placeholder="Content"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                onChange={handleChange("content")}
                type="text"
                placeholder="Category"
                required
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Send Notes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
