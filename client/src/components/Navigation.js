import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaEvernote } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { deleteAccount } from "../services/authService";
import Cookies from "js-cookie";
import { logoutUser } from "../services/authService";
import { useSnackbar } from "react-simple-snackbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/Navigation.css";

export default function Navigation() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const [openSnackbar] = useSnackbar();

  const logoutOnClick = (e) => {
    e.preventDefault();
    logoutUser()
      .then((res) => {
        openSnackbar("Logout Success!");
        setTimeout(function () {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/";
        }, 1500);
      })
      .catch(function (error) {
        console.log(error);
        if (error.response) {
          openSnackbar(error.response.data.message);
        }
      });
  };

  const deleteHandler = (id) => {
    deleteAccount(id)
      .then(() => {
        console.log("Deleted Successfully.");
        localStorage.clear();
        sessionStorage.clear();
        Cookies.remove("jwt");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FaEvernote size={"25px"} /> Note App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="text">
          {!auth ? (
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Welcome!</Nav.Link>
            </Nav>
          ) : (
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/notes">My Notes</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
          )}

          {!auth ? (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/register">
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/profile">Welcome {auth.firstName}</Nav.Link>
              <Nav.Link eventKey={2} onClick={logoutOnClick} href="/logout">
                <ImExit size={"25px"} />
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
