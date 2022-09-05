import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
export default function Navigation() {
  
  const auth = JSON.parse(localStorage.getItem("user"));

  const logoutOnClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Note App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {!auth ? (
              <Container>
                <Row>
                  <Col>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container>
                <Row>
                  <Col>
                    <Button variant="dark" bg="light" href="/notes">
                      Notes
                    </Button>
                  </Col>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark">
                        {auth.firstName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item onClick={logoutOnClick} href="/logout">
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Container>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
