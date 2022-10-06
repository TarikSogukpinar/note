import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { CreateContact } from "../services/contactService";
import { useSnackbar } from "react-simple-snackbar";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import "../styles/Contact.css";

export default function Contact() {
  const [data, setData] = useState({
    title: "",
    description: "",
    email: "",
    github: "",
    linkedin: "",
  });
  const [openSnackbar] = useSnackbar();

  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };

  const handleContact = (e) => {
    e.preventDefault();
    CreateContact(
      data.title,
      data.description,
      data.email,
      data.github,
      data.linkedin
    )
      .then((res) => {
        openSnackbar("Contact Created");
        setTimeout(function () {
          window.location.href = "/";
        }, 1500);
      })
      .catch(function (error) {
        if (error.response) {
          openSnackbar(error.response.data.message);
        }
      });
  };

  return (
    <>
      <br></br>
      <br></br>

      <h1 className="login-text text-dark  text-warning mt-6 p-3 text-center rounded">
        <IoMdContacts /> Contact Us
        <h3>You can contact us with any questions.</h3>
      </h1>
      <Container fluid="md">
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            style={{ borderRadius: "15px" }}
          >
            <Form onSubmit={handleContact}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Title</Form.Label>
                <Form.Control
                  size="lg"
                  name="title"
                  type="text"
                  onChange={handleChange("title")}
                  placeholder="Enter Title"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  size="lg"
                  name="email"
                  type="email"
                  placeholder="note@info.com"
                  onChange={handleChange("email")}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Description</Form.Label>
                <Form.Control
                  size="lg"
                  name="descrition"
                  type="text"
                  placeholder="Description"
                  onChange={handleChange("description")}
                  as="textarea"
                  rows={6}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Github</Form.Label>
                <Form.Control
                  size="lg"
                  name="github"
                  type="text"
                  placeholder="Github"
                  onChange={handleChange("github")}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Linkedin</Form.Label>
                <Form.Control
                  size="lg"
                  name="github"
                  type="text"
                  placeholder="Linkedin"
                  onChange={handleChange("linkedin")}
                  required
                />
              </Form.Group>
              <br></br>
              <Button size="lg" variant="dark btn-block" type="submit">
                Send Contact
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
