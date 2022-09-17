import React from "react";
import Alert from "react-bootstrap/Alert";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { Col, Row } from "react-bootstrap";

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
              all your notes. You can start{" "}
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
  
      <section  className="bg-dark text-light" id="learn-more m-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src="assets/img/01.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4"><AiOutlineFileProtect/> We Protect your data</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
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
                <img
                  className="img-fluid rounded-circle"
                  src="assets/img/02.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4"><GiTakeMyMoney/> Free To Use!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
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
                <img
                  className="img-fluid rounded-circle"
                  src="assets/img/03.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4"> <SiFsecure/> Secure Registration!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
