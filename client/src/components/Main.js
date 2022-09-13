import React from "react";
import Alert from "react-bootstrap/Alert";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Main() {
  const auth = localStorage.getItem("token");
  return (
    <div className="main-page m-4 p-3">
      <Alert variant="warning">
        <Alert.Heading>Welcome!</Alert.Heading>
        <h4>
          Welcome to the note taking application, this application is completely
          free. We encrypt your passwords and all your notes. You can start
          here.
        </h4>

        <div className="main-button">
          {!auth ? (
            <Container>
              <Row>
                <Col>
                  <Button className="m-2" variant="outline-dark" href="/login">
                    Login
                  </Button>
                  <Button variant="outline-dark" href="/register">
                    Register
                  </Button>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row>
                <Col>
                  <Button
                    className="m-2"
                    variant="outline-dark"
                    href="/createnote"
                  >
                    Create Note
                  </Button>
                  <Button variant="outline-dark" href="/notes">
                    My Notes
                  </Button>
                </Col>
              </Row>
            </Container>
          )}
        </div>
        <hr></hr>

        <Container>
          <Row>
            <Col>
              <a href={"https://github.com/TarikSogukpinar"}>
                <FaGithub style={{ fontSize: "30px", marginRight: "10px" }} />
              </a>
              <a href={"https://www.linkedin.com/in/tar%C4%B1k-so%C4%9Fukp%C4%B1nar/"}>
                <FaLinkedin style={{ fontSize: "30px", marginRight: "10px" }} />
              </a>
            </Col>
          </Row>
        </Container>

        <a href="https://github.com/TarikSogukpinar/note"> Project Link </a>
      </Alert>
    </div>
  );
}
