import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNote, updateNote } from "../services/noteService";
import { FaUserEdit } from "react-icons/fa";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSnackbar } from "react-simple-snackbar";
import Cookies from "js-cookie";

export default function EditNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
    id: "",
  });
  const [openSnackbar] = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    const getNotes = async () => {
      // const token = Cookies.get();
      if (id) {
        const res = await getNote(id);
        setNote({
          title: res.data.title,
          content: res.data.content,
          category: res.data.category,
          id: res.data._id,
        });
      }
    };
    getNotes();
    console.log(note);
  }, [id]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get();
      if (token) {
        // const { title, category, content, id } = note;

        updateNote(note.id, note.title, note.category, note.content, token)
          .then((res) => {
            window.location.href = "/notes";
          })
          .catch(function (error) {
            if (error.response) {
              openSnackbar(error.response.data.message);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Form onSubmit={editNote}>
          <div className="container">
            <div className="col-md-6 mx-auto text-center">
              <div className="header-title">
                <h1 className="wv-heading--title">
                  {" "}
                  <FaUserEdit /> Edit Note
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
                        type="text"
                        value={note.title}
                        htmlFor="title"
                        name="title"
                        required
                        onChange={onChangeInput}
                      />
                    </Form.Group>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <Form.Control
                      size="lg"
                      type="text"
                      value={note.category}
                      htmlFor="category"
                      name="category"
                      required
                      rows="10"
                      onChange={onChangeInput}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <Form.Control
                      size="lg"
                      type="text"
                      value={note.content}
                      htmlFor="content"
                      name="content"
                      as="textarea"
                      required
                      rows={6}
                      onChange={onChangeInput}
                    />
                  </div>
                  <br></br>
                  <div className="text-center ">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-dark btn btn-block send-button tx-tfm"
                    >
                      Save Note
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
