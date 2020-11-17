import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> H#340(4th Floor), Road #24, <br/>  New DOHS, Mohakhali, Dhaka, Bangladesh <br/> Phone: 018XXXXXXXX <br/> E-mail: info@company.com</p>
          </div>
          <div className="col-md-2">
            <h5>Comapny</h5>
            <a href="#">About</a>
            <a href="#">Site Map</a>
            <a href="#">Support Center</a>
            <a href="#">Terms Conditions</a>
            <a href="#">Submit Listing</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
