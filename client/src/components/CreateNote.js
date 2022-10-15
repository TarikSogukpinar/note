import React, { useState } from "react";
import Cookies from "js-cookie";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/CreateNote.css";
import { AddNote } from "../services/noteService";
import { FaStickyNote } from "react-icons/fa";
import { useSnackbar } from "react-simple-snackbar";

export default function CreateNote() {

  const [data, setData] = useState({ title: "", content: "", category: "" });
  const [openSnackbar] = useSnackbar();
  const handleChange = (key) => (value) => {
    let valueTemp = value?.target ? value?.target?.value : value;
    setData({ ...data, [key]: valueTemp });
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      // const { title, category, content } = data;
      AddNote(data.title, data.category, data.content)
        .then((res) => {
          openSnackbar("Note Created! Redirect Notes");
          setTimeout(function () {
            window.location.href = "/notes";
          }, 1000);
        })
        .catch(function (error) {
          if (error.response) {
            openSnackbar(error.response.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Form onSubmit={handleAddNote}>
          <div className="container">
            <div className="col-md-6 mx-auto text-center">
              <div className="header-title">
                <h1 className="wv-heading--title">
                  {" "}
                  <FaStickyNote /> Create New Note
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
                        name="title"
                        type="text"
                        onChange={handleChange("title")}
                        placeholder="Enter Title"
                        required
                      />
                    </Form.Group>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <Form.Control
                      size="lg"
                      name="category"
                      onChange={handleChange("category")}
                      type="text"
                      placeholder="Category"
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <Form.Control
                      size="lg"
                      name="content"
                      onChange={handleChange("content")}
                      type="text"
                      placeholder="Content"
                      as="textarea"
                      rows={3}
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
                      Create Note
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
                      <a href="/notes">Back Notes</a>{" "}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
