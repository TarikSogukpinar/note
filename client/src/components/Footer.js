import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-5">
      <div className="container">
        <div className="row gx-1">
          <Row className="justify-content-md-center">
            <Col xs lg="1">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/contact">Terms</a>{" "}
                </li>
              </ul>
            </Col>
            <Col xs lg="1">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  {" "}
                  <a href="/contact">Contact</a>{" "}
                </li>
              </ul>
            </Col>
            <Col xs lg="1">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/faq"> FAQ </a>{" "}
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <ul className="nav flex-column">
                <li className="nav-item mb-1">English / Turkish </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <ul className="nav flex-column">
                <li className="nav-item mb-1">© 2022 xxx.com</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}
