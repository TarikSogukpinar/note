import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaPushed } from "react-icons/fa";
import "../styles/Register.css";

export default function Register() {
  return (
    <>
      <Container>
        <h1 className="login-text text-dark shadow-sm text-warning mt-5 p-3 text-center rounded">
          <FaPushed /> Register
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            style={{ borderRadius: "15px" }}
          >
            <Form>
              <Form.Group controlId="formBasicfirstName">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formBasiclastName">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <br></br>
              <Button variant="dark btn-block" type="submit">
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
