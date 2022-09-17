import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
export default function Contact() {
  return (
    <>
      <h1>Who we are?</h1>
      <h5>
        Developed by 2 friends
        <br />
        You can Contact with us!
      </h5>
      <Container>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            style={{ borderRadius: "15px" }}
          >
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>
                  <b>Taylan Kalkan</b>
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://github.com/taylankalkan01"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link <AiFillGithub size={30} />
                  </a>
                  <hr></hr>
                  <a
                    href="https://www.linkedin.com/in/taylankalkan01/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin Link <AiFillLinkedin size={30} />
                  </a>
                  <hr></hr>
                  Email: e.taylankalkan@hotmail.com <AiOutlineMail size={30} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            style={{ borderRadius: "15px" }}
          >
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>
                  <b>Tarık Soğukpınar</b>
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://github.com/TarikSogukpinar"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link <AiFillGithub size={30} />
                  </a>
                  <hr></hr>
                  <a
                    href="https://www.linkedin.com/in/tarık-soğukpınar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin Link <AiFillLinkedin size={30} />
                  </a>
                  <hr></hr>
                  Email: ledunv@protonmail.com
                  <AiOutlineMail size={30} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
