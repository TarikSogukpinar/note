import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSnackbar } from "react-simple-snackbar";
import { loginUser } from "../services/authService";
import { RiLockPasswordFill } from "react-icons/ri";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar] = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:5000/api/user/reset-password`;
      const { data } = await axios.post(url, { email });
      setMessage(data.message);
      setError("");
      openSnackbar("Email sent successfully!");
      setTimeout(function () {
        window.location.href = "/login";
      }, 1500);
    } catch (error) {
      console.log(error);
      if (error.response) {
        openSnackbar(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Form onSubmit={handleSubmit}>
            <div className="container">
              <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                  <h1 className="wv-heading--title">
                    {" "}
                    <RiLockPasswordFill /> Forgot Password
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  <div className="myform form ">
                    <div className="form-group">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="form-label">
                          Email address
                        </Form.Label>
                        <Form.Control
                          size="lg"
                          name="email"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>
                    </div>
                    <br></br>
                    <div className="text-center ">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-dark btn btn-block send-button tx-tfm"
                      >
                        Send
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
                        Any Problem? <a href="/contact">Contact Us</a>{" "}
                      </div>
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
