import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useSnackbar } from "react-simple-snackbar/dist";
import { updateUserInfo, getUserById } from "../services/userService";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function EditUserInfo() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  });

  //   const [openSnackbar] = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    const getInfos = async () => {
      if (id) {
        const res = await getUserById(id);
        setUserInfo({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          id: res.data._id,
        });
      }
    };
    getInfos();
    console.log(userInfo);
  }, [id]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const editUserInfo = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get();
      if (token) {
        updateUserInfo(
          userInfo.id,
          userInfo.firstName,
          userInfo.lastName,
          userInfo.email
        )
          .then((res) => {
            window.location.href = "/";
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1 className="login-text text-dark text-warning mt-5 p-3 text-center rounded">
        Edit User Info
      </h1>
      <Row>
        <Col
          lg={5}
          md={6}
          sm={12}
          className="p-5 m-auto shadow-lg rounded-lg"
          style={{ borderRadius: "15px" }}
        >
          <Form onSubmit={editUserInfo} autoComplete="off">
            <Form.Group controlId="formBasicTitle">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={userInfo.firstName}
                htmlFor="firstName"
                name="firstName"
                required
                onChange={onChangeInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={userInfo.lastName}
                htmlFor="lastName"
                name="lastName"
                required
                rows="10"
                onChange={onChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCategory">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={userInfo.email}
                htmlFor="email"
                name="email"
                required
                rows="10"
                onChange={onChangeInput}
              />
            </Form.Group>
            <br></br>
            <Button size="lg" variant="dark btn-block" type="submit">
              Update User Info
            </Button>
          </Form>
        </Col>
      </Row>
     
    </Container>
  );
}
