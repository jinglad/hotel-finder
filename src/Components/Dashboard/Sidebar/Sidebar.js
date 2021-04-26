import React, { useContext, useEffect, useState } from "react";
import logo from "../../../Images/logos/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faList, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";
import { userContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/isAdmin?email=${loggedInUser.email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setIsAdmin(true);
        }
      });
  }, []);

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
          {isAdmin && (
            <div>
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
                  to="/make-admin"
                >
                  <FontAwesomeIcon icon={faList} /> Make Admin
                </Link>
              </li>
            </div>
          )}
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
