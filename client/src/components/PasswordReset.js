import React, { useEffect, useState, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { GrPowerReset } from "react-icons/gr";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PasswordReset() {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [message, SetMessage] = useState("");

  const param = useParams();
  const url = `http://localhost:5000/api/user/reset-password/${param.id}/${param.token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { password });
      SetMessage(data.message);

      window.location = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {validUrl ? (
        <Row className="mt-5">
          <Form onSubmit={handleSubmit}>
            <div className="container">
              <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                  <h1 className="wv-heading--title">
                    <GrPowerReset /> Reset Password
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
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
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
                        Reset Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Row>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
}
