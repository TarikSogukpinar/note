import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSnackbar } from "react-simple-snackbar";
import { loginUser } from "../services/authService";
import { GrLogin } from "react-icons/gr";

export default function ForgetPassword() {
  return (
    <>
      <Container>
        <h1 className="login-text text-dark text-warning mt-3 p-5 text-center rounded">
          <GrLogin /> Forget Password
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
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  size="lg"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <br></br>
              <Button size="lg" variant="dark btn-block" type="submit">
                I Forgot my password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
