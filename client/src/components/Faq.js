import React from "react";
import "../styles/Faq.css";
import { MdSettingsSuggest } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { Container } from "react-bootstrap";
export default function Faq() {
  return (
    <Container>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <MdSettingsSuggest size={300} />
          </div>
          <div className="col-md-6">
            <h4>How Does it work</h4>
            <h4 className="text-muted">
              The password you entered is encrypted with Crypto JS, and when you
              want to see it again, your password will be decrypted again. This
              information cannot be viewed by administrators in any way.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Is it safe enough?</h4>
            <h4 className="text-muted">
              Nothing is certain. But we try to take all system security
              measures to keep your notes safe.
            </h4>
          </div>
          <div className="col-md-6 how-img">
            <AiFillSafetyCertificate size={300} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <GiTakeMyMoney size={300} />
          </div>
          <div className="col-md-6">
            <h4>Is it completely free</h4>

            <h4 className="text-muted">
              This application is completely free, we do not charge any fees. We
              hope it continues like this.
            </h4>
          </div>
        </div>
      </div>
    </Container>
  );
}
