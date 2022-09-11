import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "../styles/Profile.css";
import Alert from "react-bootstrap/Alert";
export default function Profile() {
  const auth = JSON.parse(localStorage.getItem("user"));

  return (
    <Container fluid>
      <Row>
        <Col>
          <Alert variant="warning" style={{ marginTop: "15px" }}>
            <h4>Profile Page</h4>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>First Name : {auth.firstName} </h5>
        </Col>
        <Col>
          <h5>Last Name : {auth.lastName}</h5>
        </Col>
        <Col>
          <h5>Email : {auth.email} </h5>
        </Col>
      </Row>
    </Container>
  );
}
