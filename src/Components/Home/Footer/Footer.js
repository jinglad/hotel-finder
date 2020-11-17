import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../../Images/logos/Vector.png";
import insta from "../../../Images/logos/Vector1.png";
import linkedin from "../../../Images/logos/Vector2.png";
import youtube from "../../../Images/logos/Vector3.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> H#340(4th Floor), Road
              #24, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh <br /> Phone:
              018XXXXXXXX <br /> E-mail: info@company.com
            </p>
          </div>
          <div className="col-md-2">
            <h5>Comapny</h5>
            <a href="#" className="text-white text-decoration-none d-block">
              About
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Site Map
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Support Center
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Terms Conditions
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Submit Listing
            </a>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <a href="#" className="text-white text-decoration-none d-block">
              Quick Links
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Rentals
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Sales
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Contact
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Terms Conditions
            </a>
            <a href="#" className="text-white text-decoration-none d-block">
              Blog
            </a>
          </div>
          <div className="col-md-3 ml-3">
            <h5>About US</h5>
            <p>
              We are the top red estate agency in Sydney, With agents available
              to answer any question 24/7
            </p>
            <div>
              <a href="#">
                <img src={facebook} className="w-24 mr-3" alt="" />
              </a>
              <a href="#">
                <img src={insta} className="w-24 mr-3" alt="" />
              </a>
              <a href="#">
                <img src={linkedin} className="w-24 mr-3" alt="" />
              </a>
              <a href="#">
                <img src={youtube} className="w-24 mr-3" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
