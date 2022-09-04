import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaPushed } from "react-icons/fa";
export default function Login() {
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
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control
                      name="email"
                     
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>
    
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control
                      name="password"
                   
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <br></br>
                  <Button  variant="dark btn-block" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      );
}
