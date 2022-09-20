import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import { FaEvernote } from "react-icons/fa";
import { deleteAccount } from "../services/authService";
export default function Navigation() {
  const auth = JSON.parse(localStorage.getItem("user"));

  const logoutOnClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  const deleteHandler = (id) => {
    deleteAccount(id)
      .then(() => {
        console.log("Deleted Successfully.");
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <FaEvernote /> Note App
        </Navbar.Brand>
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
                    <Button variant="dark" bg="light" href="/contact">
                      Contact
                    </Button>
                  </Col>
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
                        <Dropdown.Item
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure to delete your account permanently?"
                              )
                            ) {
                              deleteHandler(auth.id);
                            }
                          }}
                        >
                          {" "}
                          Delete account
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
