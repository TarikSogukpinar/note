import React from "react";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiFsecure, SiCrowdsource } from "react-icons/si";
import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";

export default function Main() {
  const auth = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <header class="masthead bg-light">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <div class="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 class="display-1 lh-1 mb-3">
                  Showcase your app beautifully.
                </h1>
                <p class="lead fw-normal text-muted mb-5">
                  Launch your mobile app landing page faster with this free,
                  open source theme from Start Bootstrap!
                </p>
                <div class="d-flex flex-column flex-lg-row align-items-center">
                  {!auth ? (
                    <Row>
                      <Col>
                        <Button href="/login">Login</Button>
                      </Col>
                      <Col>
                        <Button href="/register">Register</Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col>
                        <Button href="/notes">Notes</Button>
                      </Col>
                      <Col>
                        <Button hreft="/terms">Terms</Button>
                      </Col>
                    </Row>
                  )}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="masthead-device-mockup">
                <SiCrowdsource size={400} />

                <div class="device-wrapper">
                  <div
                    class="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div class="screen bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-2"> Free To Use</h2>
                <h4>
                  Note App is completely free. No need to pay to save notes
                </h4>
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
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-2"> Open Source</h2>
                <h4>
                  This software is completely open source. You can support us on{" "}
                  <a href="https://github.com/"> Github</a> and review the code.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
