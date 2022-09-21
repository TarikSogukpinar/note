import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Profile.css";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
export default function Profile() {
  const auth = JSON.parse(localStorage.getItem("user"));

  return (
    <Container>
      <h1 className="login-text text-dark  text-warning mt-6 p-3 text-center rounded">
        <h3>Profile</h3>
      </h1>

      <Row xs={2} md={1} className="g-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{auth.email}</Card.Title>
              <Card.Text>{auth.firstName}</Card.Text>
              <Card.Text>{auth.lastName}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
