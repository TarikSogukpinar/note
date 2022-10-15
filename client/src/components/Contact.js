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
    

      <Container>
        <Row className="mt-5">
          <Form onSubmit={handleContact}>
            <div className="container">
              <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                  <h1 className="wv-heading--title">
                    {" "}
                    <IoMdContacts /> Contact
                    <h3>You can contact us with any questions.</h3>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  <div className="myform form ">
                    <div className="form-group">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          size="lg"
                          name="title"
                          type="text"
                          onChange={handleChange("title")}
                          placeholder="Enter Title"
                          required
                        />
                      </Form.Group>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <Form.Control
                        size="lg"
                        name="email"
                        type="email"
                        placeholder="note@info.com"
                        onChange={handleChange("email")}
                        required
                      />
                    </div>
                    <br></br>
                    <div className="form-group">
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
                    </div>
                    <br></br>
                    <div className="form-group">
                      <Form.Control
                        size="lg"
                        name="github"
                        type="text"
                        placeholder="Github"
                        onChange={handleChange("github")}
                        required
                      />
                    </div>
                    <br></br>
                    <div className="form-group">
                      <Form.Control
                        size="lg"
                        name="github"
                        type="text"
                        placeholder="Linkedin"
                        onChange={handleChange("linkedin")}
                        required
                      />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="text-center ">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-dark btn btn-block send-button tx-tfm"
                      >
                        Send Contact
                      </Button>
                    </div>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
}
