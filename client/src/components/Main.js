import React from "react";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiFsecure, SiCrowdsource } from "react-icons/si";
import { Col, Row } from "react-bootstrap";

export default function Main() {
  const auth = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <header class="masthead bg-dark text-light">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="text-center">
              <div class="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 class="display-4 text-center lh-1 mb-3">
                  <strong>Welcome Note Taking Application</strong>
                </h1>
                <p class="lead fw-normal text-center mb-5">
                  Free, Safe, Open Source and{" "}
                  <a href="/faq" target={"_blank"}>
                    Learn More
                  </a>
                </p>

                <div class="d-flex flex-column text-center flex-sm-row justify-content-center">
                  {!auth ? (
                    <Row>
                      <Col>
                        <Button size="lg" className="bg-dark" href="/login">
                          Login
                        </Button>
                      </Col>
                      <Col>
                        <Button size="lg" className="bg-dark" href="/register">
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col>
                        <Button size="lg" className="bg-dark" href="/notes">
                          Notes
                        </Button>
                      </Col>
                      <Col>
                        <Button size="lg" className="bg-dark" href="/profile">
                          Profile
                        </Button>
                      </Col>
                    </Row>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <br></br>
      <section className="bg-light text-dark" id="learn-more m-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <AiOutlineFileProtect size={200} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <p className="display-1"> We Protect Your Data</p>
                <h4>
                  We encrypt all the notes you save. Nobody, including us, has
                  access to these notes.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <GiTakeMyMoney size={200} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <p className="display-3"> Free to Use</p>
                <h4>This app is completely free. You will not pay any fees</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <SiFsecure size={200} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <p className="display-3"> Secure Registration</p>
                <h4>
                  We securely store your user password. You don't have to worry
                  about it!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <SiCrowdsource size={200} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <p className="display-3"> Open Source</p>
                <h4>
                  This app is completely open source. You can find all the codes
                  on{" "}
                  <a
                    href="https://github.com/TarikSogukpinar/note"
                    target={"_blank"}
                  >
                    github.
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
