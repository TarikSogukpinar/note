import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import { FiSettings } from "react-icons/fi";
import Cookies from "js-cookie";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  const [token, setToken] = useState("");

  const getUserInfo = async () => {
    const res = await axios.get("http://localhost:5000/api/user/getUser", {
      withCredentials: true,
    });

    setUserInfo(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    const token = Cookies.get();
    setToken(token);
    if (token) {
      getUserInfo();
    }
  }, []);

  return (
    <div className="container">
      <br></br>
      {userInfo.map((userInfos, index) => (
        <Container key={index}>
          <div className="container-xl px-4 mt-4">
            <h1 className="wv-heading--title">
              {" "}
              <FiSettings /> User Settings
            </h1>
            <small>Note App v1.0.0</small>
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      value={userInfos.email}
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <Form.Control
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={userInfos.firstName}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <Form.Control
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={userInfos.lastName}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Created At
                      </label>
                      <Form.Control
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={userInfos.createdAt}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        User Role
                      </label>
                      <Form.Control
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={userInfos.roles}
                      />
                    </div>
                  </div>

                  <Button
                    href={`/editUserInfo/${userInfos._id}`}
                    className="bg-dark btn  "
                    type="button"
                    style={{ margin: "0 20px" }}
                  >
                    Edit Profile
                  </Button>

                  <Button
                    href={`/editUserInfo/${userInfos._id}`}
                    className="bg-dark btn  "
                    type="button"
                  >
                    Delete Profile
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </div>
  );
}
