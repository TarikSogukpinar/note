import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaRegPaperPlane } from "react-icons/fa";
import { registerUser } from "../services/authService";
import { useSnackbar } from "react-simple-snackbar";
import "../styles/Register.css";

export default function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(data.firstName, data.lastName, data.email, data.password)
      .then((res) => {
        openSnackbar("Register Success! Redirect Login Page");
        setTimeout(function () {
          window.location.href = "/login";
        }, 2000);
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
        <h1 className="login-text text-dark shadow-sm text-warning mt-5 p-3 text-center rounded">
          <FaRegPaperPlane /> Register
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            style={{ borderRadius: "15px" }}
          >
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="formBasicfirstName">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  size="lg"
                  name="firstName"
                  type="text"
                  onChange={handleChange("firstName")}
                  placeholder="First Name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasiclastName">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  size="lg"
                  name="lastName"
                  type="text"
                  onChange={handleChange("lastName")}
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  size="lg"
                  name="email"
                  onChange={handleChange("email")}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  size="lg"
                  name="password"
                  type="password"
                  onChange={handleChange("password")}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <br></br>
              <Button size="lg" variant="dark btn-block" type="submit">
                Register
              </Button>
            </Form>
            <div className="register-register">
              Already Register? <a href="/login">Login</a>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
