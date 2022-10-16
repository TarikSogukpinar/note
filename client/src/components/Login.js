import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSnackbar } from "react-simple-snackbar";
import { loginUser } from "../services/authService";
import { GrLogin } from "react-icons/gr";
import "../styles/Login.css";

export default function Login({ setLoginUser }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [openSnackbar] = useSnackbar();

  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(data.email, data.password)
      .then((res) => {
        openSnackbar("Login Success");
        setTimeout(function () {
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.href = "/";
        }, 1500);
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
        <Row className="mt-5">
          <Form onSubmit={handleLogin}>
            <div className="container">
              <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                  <h1 className="wv-heading--title">
                    {" "}
                    <GrLogin /> Login
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
                          name="email"
                          type="email"
                          onChange={handleChange("email")}
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>
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
                        Login
                      </Button>
                    </div>
                    <div className="col-md-12 ">
                      <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                      </div>
                    </div>

                    <p className="small mt-3">
                      <div className="login-register">
                        New User? <a href="/register">Register</a>{" "}
                      </div>
                      <div className="login-register">
                        <a href="/forget-password">Forget Password</a>{" "}
                      </div>
                       <a href="/faq">FAQ&nbsp;</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
}
