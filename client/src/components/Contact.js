import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
export default function Contact() {
  return (
    <>
      <br></br>
      <br></br>

      <Container>
        <h1 className="login-text text-dark  text-warning mt-6 p-3 text-center rounded">
          <IoMdContacts /> Contact Us
          <h3>You can contact us with any questions</h3>
        </h1>

        <Row xs={1} md={2} className="g-5">
          <Col>
            <Card>
              <Col>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/taylankalkan01"
                >
                  <AiFillGithub size={150} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/taylankalkan01"
                >
                  <AiFillLinkedin size={150} />
                </a>
              </Col>

              <Card.Body>
                <Card.Title>Taylan Kalkan</Card.Title>
                <Card.Text>e.taylankalkan@hotmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Col>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/TarikSogukpinar"
                >
                  <AiFillGithub size={150} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tar%C4%B1k-so%C4%9Fukp%C4%B1nar"
                >
                  <AiFillLinkedin size={150} />
                </a>
              </Col>

              <Card.Body>
                <Card.Title>Tarık Sogukpınar</Card.Title>
                <Card.Text>ledunv@protonmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
