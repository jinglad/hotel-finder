import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../Images/logos/Logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-nav">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} alt="" className="w-40" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Conserns
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="log-in-btn" href="#">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
