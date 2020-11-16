import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AllBookingList.css';

const AllBookingList = () => {
    return (
        <div className="booking-list container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 mt-5">
                    <div className="d-flex justify-content-between mb-5">
                        <h3 className="mb-0">Booking List</h3>
                        <p>User Name</p>
                    </div>
                    <div className="booking-table ml-0 bg-light">
                        <div className="request-list">
                            <table className="table table-borderless bg-none">
                                <thead>
                                    <tr>
                                        <th className="text-secondary" scope="col">Name</th>
                                        <th className="text-secondary" scope="col">Email</th>
                                        <th className="text-secondary" scope="col">Phone No</th>
                                        <th className="text-secondary" scope="col">Message</th>
                                        <th className="text-secondary" scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rafsun</td>
                                        <td>saifrafsun@gmail.com</td>
                                        <td>018xxxxxxx</td>
                                        <td>This is test</td>
                                        <td scope="col" span="1">
                                            <select className="status-change">
                                                <option className="text-danger" >Pending</option>
                                                <option value="done">Done</option>
                                            </select>
                                        </td>
                                    </tr>
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
