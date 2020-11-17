import React from "react";
import logo from "../../../Images/logos/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faList, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

const SideBar = () => {
  return (
    <div>
      <Link to="/" className="ml-5 mb-5 pb-5">
        <img
          style={{ width: "150px", height: "74.8px" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <div
        className="ml-5 sidebar d-flex flex-column py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link
              className="text-decoration-none text-dark item"
              to="/all-bookings"
            >
              <FontAwesomeIcon icon={faList} /> Booking List
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none text-dark item"
              to="/add-rent"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Rent
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-dark item" to="/my-rent">
              <FontAwesomeIcon icon={faUser} /> My Rent
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
