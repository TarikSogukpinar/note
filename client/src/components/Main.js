import React from "react";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiFsecure, SiCrowdsource } from "react-icons/si";
import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";

export default function Main() {
  const auth = localStorage.getItem("token");
  return (
    <div>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container px-5">
            <h1>Welcome to the note taking application</h1>
            <h4>
              This application is completely free. We encrypt your passwords and
              all your notes. You can start here{" "}
            </h4>
            <br></br>
            {!auth ? (
              <Row>
                <Col>
                  <Button
                    className="btn btn-light  btn-md m-2"
                    href="/login"
                    size="lg"
                  >
                    Login
                  </Button>
                  <Button
                    className="btn btn-light btn-md m-2"
                    href="/register"
                    size="lg"
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <Button
                    className="btn btn-light btn-md m-2"
                    href="/createnote"
                    size="lg"
                  >
                    Create Note
                  </Button>
                  <Button
                    className="btn btn-light btn-md m-2"
                    href="/notes"
                    size="lg"
                  >
                    My Note
                  </Button>
                </Col>
              </Row>
            )}
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      <section className="bg-dark text-light" id="learn-more m-5">
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

      <section className="bg-dark text-light">
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

      <section className="bg-dark text-light">
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

      <section className="bg-dark text-light">
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
