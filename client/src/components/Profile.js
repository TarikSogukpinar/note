import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Profile.css";

export default function Profile() {
  const auth = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="section about-section gray-bg" id="about">
      
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Me</h3>
              <h6 className="theme-color lead">
                A Lead UX &amp; UI designer based in Canada
              </h6>
              <p>
                I <mark>design and develop</mark> services for customers of all
                sizes, specializing in creating stylish, modern websites, web
                services and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p>4th april 1998</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>Canada</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>California, USA</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>info@domain.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>820-885-3321</p>
                  </div>
                  <div className="media">
                    <label>Skype</label>
                    <p>skype.0404</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                title
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to={500} data-speed={500}>
                  500
                </h6>
                <p className="m-0px font-w-600">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to={150} data-speed={150}>
                  150
                </h6>
                <p className="m-0px font-w-600">Project Completed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to={850} data-speed={850}>
                  850
                </h6>
                <p className="m-0px font-w-600">Photo Capture</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to={190} data-speed={190}>
                  190
                </h6>
                <p className="m-0px font-w-600">Telephonic Talk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Page title */}
              <div className="my-5">
                <h3>My Profile</h3>
                <hr />
              </div>
              {/* Form START */}
              <form className="file-upload">
                <div className="row mb-5 gx-5">
                  {/* Contact detail */}
                  <div className="col-xxl-8 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Contact detail</h4>
                        {/* First Name */}
                        <div className="col-md-6">
                          <label className="form-label">First Name *</label>
                          <input type="text" className="form-control" placeholder aria-label="First name" defaultValue="Scaralet" />
                        </div>
                        {/* Last name */}
                        <div className="col-md-6">
                          <label className="form-label">Last Name *</label>
                          <input type="text" className="form-control" placeholder aria-label="Last name" defaultValue="Doe" />
                        </div>
                        {/* Phone number */}
                        <div className="col-md-6">
                          <label className="form-label">Phone number *</label>
                          <input type="text" className="form-control" placeholder aria-label="Phone number" defaultValue="(333) 000 555" />
                        </div>
                        {/* Mobile number */}
                        <div className="col-md-6">
                          <label className="form-label">Mobile number *</label>
                          <input type="text" className="form-control" placeholder aria-label="Phone number" defaultValue="+91 9852 8855 252" />
                        </div>
                        {/* Email */}
                        <div className="col-md-6">
                          <label htmlFor="inputEmail4" className="form-label">Email *</label>
                          <input type="email" className="form-control" id="inputEmail4" defaultValue="example@homerealty.com" />
                        </div>
                        {/* Skype */}
                        <div className="col-md-6">
                          <label className="form-label">Skype *</label>
                          <input type="text" className="form-control" placeholder aria-label="Phone number" defaultValue="Scaralet D" />
                        </div>
                      </div> {/* Row END */}
                    </div>
                  </div>
                  {/* Upload profile */}
                  <div className="col-xxl-4">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                        <div className="text-center">
                          {/* Image upload */}
                          <div className="square position-relative display-2 mb-3">
                            <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" />
                          </div>
                          {/* Button */}
                          <input type="file" id="customFile" name="file" hidden />
                          <label className="btn btn-success-soft btn-block" htmlFor="customFile">Upload</label>
                          <button type="button" className="btn btn-danger-soft">Remove</button>
                          {/* Content */}
                          <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* Row END */}
                {/* Social media detail */}
                <div className="row mb-5 gx-5">
                  <div className="col-xxl-6 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Social media detail</h4>
                        {/* Facebook */}
                        <div className="col-md-6">
                          <label className="form-label"><i className="fab fa-fw fa-facebook me-2 text-facebook" />Facebook *</label>
                          <input type="text" className="form-control" placeholder aria-label="Facebook" defaultValue="http://www.facebook.com" />
                        </div>
                        {/* Twitter */}
                        <div className="col-md-6">
                          <label className="form-label"><i className="fab fa-fw fa-twitter text-twitter me-2" />Twitter *</label>
                          <input type="text" className="form-control" placeholder aria-label="Twitter" defaultValue="http://www.twitter.com" />
                        </div>
                        {/* Linkedin */}
                        <div className="col-md-6">
                          <label className="form-label"><i className="fab fa-fw fa-linkedin-in text-linkedin me-2" />Linkedin *</label>
                          <input type="text" className="form-control" placeholder aria-label="Linkedin" defaultValue="http://www.linkedin.com" />
                        </div>
                        {/* Instragram */}
                        <div className="col-md-6">
                          <label className="form-label"><i className="fab fa-fw fa-instagram text-instagram me-2" />Instagram *</label>
                          <input type="text" className="form-control" placeholder aria-label="Instragram" defaultValue="http://www.instragram.com" />
                        </div>
                        {/* Dribble */}
                        <div className="col-md-6">
                          <label className="form-label"><i className="fas fa-fw fa-basketball-ball text-dribbble me-2" />Dribble *</label>
                          <input type="text" className="form-control" placeholder aria-label="Dribble" defaultValue="http://www.dribble.com" />
                        </div>
                        {/* Pinterest */}
                        <div className="col-md-6">
                          <label className="form-label"><i className="fab fa-fw fa-pinterest text-pinterest" />Pinterest *</label>
                          <input type="text" className="form-control" placeholder aria-label="Pinterest" defaultValue="http://www.pinterest.com" />
                        </div>
                      </div> {/* Row END */}
                    </div>
                  </div>
                  {/* change password */}
                  <div className="col-xxl-6">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="my-4">Change Password</h4>
                        {/* Old password */}
                        <div className="col-md-6">
                          <label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        {/* New password */}
                        <div className="col-md-6">
                          <label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
                          <input type="password" className="form-control" id="exampleInputPassword2" />
                        </div>
                        {/* Confirm password */}
                        <div className="col-md-12">
                          <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
                          <input type="password" className="form-control" id="exampleInputPassword3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* Row END */}
                {/* button */}
                <div className="gap-3 d-md-flex justify-content-md-end text-center">
                  <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
                  <button type="button" className="btn btn-primary btn-lg">Update profile</button>
                </div>
              </form> {/* Form END */}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
