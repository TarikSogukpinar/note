import React from "react";
import Alert from "react-bootstrap/Alert";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";

export default function Main() {
  return (
    <div className="main-page">
      <Alert variant="light">
        <Alert.Heading>Welcome Note App!</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
        <div className="main-button">
          <Button variant="primary" href="/login">Login</Button>{" "}
          <Button variant="primary"href="/register">Register</Button>{" "}
        </div>
      </Alert>
    </div>
  );
}
