import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import "./AllBookingList.scss";

const AllBookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  //   const [request,set]
  //   useEffect(() => {
  //     fetch(`https://scintillating-rustic-egret.glitch.me/fullBookingList`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBookings(data);
  //       });
  //   }, []);

  useEffect(() => {
    fetch("https://scintillating-rustic-egret.glitch.me/requests")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="booking-list container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 mt-5">
          <div className="d-flex justify-content-between mb-5 mt-3">
            <h3>Booking List</h3>
            <p>User Name</p>
          </div>
          <div className="booking-table ml-0 bg-light">
            <div className="request-list">
              <table className="table table-borderless bg-none">
                <thead>
                  <tr>
                    <th className="text-secondary" scope="col">
                      Name
                    </th>
                    <th className="text-secondary" scope="col">
                      Email
                    </th>
                    <th className="text-secondary" scope="col">
                      Phone No
                    </th>
                    <th className="text-secondary" scope="col">
                      Message
                    </th>
                    <th className="text-secondary" scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((item) => (
                    <tr>
                      <td>{item.data.name}</td>
                      <td>{item.data.email}</td>
                      <td>{item.data.phone}</td>
                      <td>{item.data.description}</td>
                      <td scope="col" span="1">
                        <select className="status-change">
                          <option className="text-danger" value="pending">Pending</option>
                          <option value="done">Done</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookingList;
