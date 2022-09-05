import React from "react";
import { FaPushed } from "react-icons/fa";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <div className="container">
      <footer className="footer-section d-flex flex-wrap justify-content-between align-items-center py-5 my-5 border-top">
        <p className="col-md-4 mb-0 text-muted footer-text">
          &copy; 2022 Note App
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        ></a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted footer-text">
              <FaPushed /> Github
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted footer-text">
              <FaPushed /> Linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
