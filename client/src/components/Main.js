import React from "react";
import Alert from "react-bootstrap/Alert";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
export default function Main() {
  const auth = localStorage.getItem("token");
  return (
    <div className="main-page">
      <Alert variant="light">
        <Alert.Heading>Welcome Note App!</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>

        <div className="main-button">
          {!auth ? (
            <Container>
              <Row>
                <Col>
                  <Button className="m-2" variant="primary" href="/login">
                    Login
                  </Button>
                  <Button variant="primary" href="/register">
                    Register
                  </Button>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Button variant="primary" href="/createnote">
                Create Note
              </Button>
            </Container>
          )}
        </div>
      </Alert>
    </div>
  );
}
