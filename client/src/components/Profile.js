import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../styles/Profile.css";
import { FiSettings } from "react-icons/fi";
import Cookies from "js-cookie";
import { updateUserInfo, getUserById } from "../services/userService";
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
      {userInfo.map((userInfos, index) => (
        <Container key={index}>
          <h1>Profile Settings</h1>
          <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-xl-4">
                {/* Profile picture card*/}
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    {/* Profile picture image*/}
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src="http://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    {/* Profile picture help block*/}
                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>
                    {/* Profile picture upload button*/}
                    <button className="btn btn-primary" type="button">
                      Upload new image
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                {/* Account details card*/}
                <div className="card mb-4">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form>
                      {/* Form Group (username)*/}
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="email"
                          type="text"
                          htmlFor="email"
                          value={userInfos.email}
                        />
                      </div>
                      {/* Form Row*/}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (first name)*/}
                        <div className="col-md-6">
                          <label
                            className="small mb-1"
                            htmlFor="inputFirstName"
                          >
                            First name
                          </label>
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            htmlFor="firstName"
                            value={userInfos.firstName}
                          />
                        </div>
                        {/* Form Group (last name)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLastName">
                            Last name
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            htmlFor="lastName"
                            value={userInfos.lastName}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLastName">
                            Created Date
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            htmlFor="lastName"
                            value={userInfos.createdAt}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLastName">
                            System Role
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            htmlFor="lastName"
                            value={userInfos.roles}
                          />
                        </div>
                      </div>

                      <div className="row gx-3 mb-3"></div>
                      {/* Save changes button*/}

                      <Button
                        href={`/editUserInfo/${userInfos._id}`}
                        className="btn btn-primary"
                        type="button"
                        style={{ margin: "0 20px" }}
                      >
                        Edit Profile
                      </Button>

                      <Button
                        href={`/editUserInfo/${userInfos._id}`}
                        className="btn btn-danger"
                        type="button"
                      >
                        Delete Profile
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </div>
  );
}
