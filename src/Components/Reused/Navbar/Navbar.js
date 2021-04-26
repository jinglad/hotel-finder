import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../Images/logos/Logo.png";
import { userContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // const history = useHistory();

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // console.log("signout successfully");
        // history.push("/login");
        if (loggedInUser.success) {
          const signOut = {
            isSignedIn: false,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            error: "",
            success: false,
          };
          setLoggedInUser(signOut);
        } else {
          const signOutUser = {
            name: "",
            email: "",
          };
          setLoggedInUser(signOutUser);
        }
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
              <Link className="nav-link" to="/service">
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
              {!loggedInUser.email ? (
                <Link className="log-in-btn" to="/login">
                  Login
                </Link>
              ) : (
                <button onClick={handleSignOut} className="log-in-btn">
                  LogOut
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
