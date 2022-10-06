import React from "react";
import "../styles/Faq.css";
// import { GrLogin } from "react-icons/gr";
import { MdSettingsSuggest } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
export default function Faq() {
  return (
    <Container>
      <div class="how-section1">
        <div class="row">
          <div class="col-md-6 how-img">
            <MdSettingsSuggest size={300} />
          </div>
          <div class="col-md-6">
            <h4>How Does it work</h4>
            <h4 class="subheading">
              GetLance is a great place to find more clients, and to run and
              grow your own freelance business.
            </h4>
            <p class="text-muted">
              Freedom to work on ideal projects. On GetLance, you run your own
              business and choose your own clients and projects. Just complete
              your profile and we’ll highlight ideal jobs. Also search projects,
              and respond to client invitations. Wide variety and high pay.
              Clients are now posting jobs in hundreds of skill categories,
              paying top price for great work. More and more success. The
              greater the success you have on projects, the more likely you are
              to get hired by clients that use GetLance.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4>Is it safe enough?</h4>
            <h4 class="subheading">
              GetLance makes it easy to connect with clients and begin doing
              great work.
            </h4>
            <p class="text-muted">
              Streamlined hiring. GetLance’s sophisticated algorithms highlight
              projects you’re a great fit for. Top Rated and Rising Talent
              programs. Enjoy higher visibility with the added status of
              prestigious programs. Do substantial work with top clients.
              GetLance pricing encourages freelancers to use GetLance for repeat
              relationships with their clients.
            </p>
          </div>
          <div class="col-md-6 how-img">
            <AiFillSafetyCertificate size={300} />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 how-img">
            <GiTakeMyMoney size={300} />
          </div>
          <div class="col-md-6">
            <h4>Is it completely free</h4>
            <h4 class="subheading">
              With GetLance, you have the freedom and flexibility to control
              when, where, and how you work. Each project includes an online
              workspace shared by you and your client, allowing you to:
            </h4>
            <p class="text-muted">
              Send and receive files. Deliver digital assets in a secure
              environment. Share feedback in real time. Use GetLance Messages to
              communicate via text, chat, or video. Use our mobile app. Many
              features can be accessed on your mobile phone when on the go.
            </p>
          </div>
        </div>
       
      </div>
    </Container>
  );
}
