import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { FaRegPaperPlane } from "react-icons/fa";
import { registerUser } from "../services/authService";
import { useSnackbar } from "react-simple-snackbar";
import "../styles/Register.css";

export default function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    registerUser(data.firstName, data.lastName, data.email, data.password)
      .then((res) => {
        openSnackbar("Register Success! Redirect Login Page");
        setTimeout(function () {
          window.location.href = "/login";
        }, 2000);
      })
      .catch(function (error) {
        if (error.response) {
          openSnackbar(error.response.data.message);
        }
      });
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleRegister}>
          <Row className="mt-5">
            <div className="container">
              <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                  <h1 className="wv-heading--title">
                    {" "}
                    <FaRegPaperPlane /> Register
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  <div className="myform form ">
                    <div className="form-group">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          size="lg"
                          name="firstName"
                          type="text"
                          onChange={handleChange("firstName")}
                          placeholder="First Name"
                          required
                        />
                      </Form.Group>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <Form.Control
                        size="lg"
                        name="lastName"
                        type="text"
                        onChange={handleChange("lastName")}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <br></br>
                    <div className="form-group">
                      <Form.Control
                        size="lg"
                        name="email"
                        type="email"
                        onChange={handleChange("email")}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <br></br>

                    <div className="form-group">
                      <Form.Control
                        size="lg"
                        name="password"
                        type="password"
                        onChange={handleChange("password")}
                        placeholder="Password"
                        required
                      />
                    </div>

                    <br></br>
                    <div className="text-center ">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-dark btn btn-block send-button tx-tfm"
                      >
                        Register
                      </Button>
                    </div>
                    <div className="col-md-12 ">
                      <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                      </div>
                    </div>

                    <p className="small mt-3">
                      <div className="register-register">
                        Already Register? <a href="/login">Login</a>{" "}
                      </div>
                      <div className="register-register">
                        <a href="/faq">FAQ</a>{" "}
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Form>
      </Container>
    </>
  );
}
