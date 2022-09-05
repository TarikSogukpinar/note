import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from "../services/authService";
import { FaPushed } from "react-icons/fa";
import "../styles/Login.css";

export default function Login({ setLoginUser }) {
  const [data, setData] = useState({ email: "", password: "" });
  //const [error, setError] = useState("");

  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(data.email, data.password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/";
      })
      .catch(() => {
        alert("hataa !");
        // toast("Wow so easy!");
        //NotificationManager.info('Info message');
      });
  };

  return (
    <>
      <Container>
        <h1 className="login-text text-dark shadow-sm text-warning mt-5 p-3 text-center rounded">
          <FaPushed /> Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            style={{ borderRadius: "15px" }}
          >
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  onChange={handleChange("email")}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={handleChange("password")}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <br></br>
              <Button variant="dark btn-block" type="submit">
                Login
              </Button>
              <div className="login-register">
                New User? <a href="/register">Register</a>{" "}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
