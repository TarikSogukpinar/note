import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { updateUserInfo, getUserById } from "../services/userService";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSnackbar } from "react-simple-snackbar";
import Cookies from "js-cookie";
import { FaUserAlt } from "react-icons/fa";

export default function EditUserInfo() {
  const [openSnackbar] = useSnackbar();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  });

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
            openSnackbar(
              "Your information has been successfully updated. You are being redirected."
            );
            setTimeout(function () {
              window.location.href = "/profile";
            }, 1500);
          })
          .catch(function (error) {
            if (error.response) {
              openSnackbar(error.response.data.message);
            }
          });
      }
    } catch (error) {
      if (error.response) {
        openSnackbar(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Form onSubmit={editUserInfo}>
          <div className="container">
            <div className="col-md-6 mx-auto text-center">
              <div className="header-title">
                <h1 className="wv-heading--title">
                  {" "}
                  <FaUserAlt /> Edit User Info
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
                        value={userInfo.firstName}
                        htmlFor="firstName"
                        name="firstName"
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
                      value={userInfo.lastName}
                      htmlFor="lastName"
                      name="lastName"
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
                      value={userInfo.email}
                      htmlFor="email"
                      name="email"
                      required
                      rows="10"
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
                      Edit Info
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
