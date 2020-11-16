import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './MyRent.css';

const MyRent = () => {
    return (
        <div className="my-rents container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 mt-5">
                    <div className="d-flex justify-content-between mb-5 mt-3">
                        <h3 className="mb-0">My Rents</h3>
                        <p>User Name</p>
                    </div>
                    <div className="booking-table mx-auto bg-light" >
                       <div className="table-bordered rounded">
                            <table className="table table-borderless bg-none mx-auto p-4">
                                <thead>
                                    <tr className="bg-light">
                                        <th scope="col">Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-none">
                                    <tr>
                                        <td>Rafsun</td>
                                        <td>saifrafsun@gmail.com</td>
                                        <td>018xxxxxxx</td>
                                        <td>This is test</td>
                                        <td>Pending/Done</td>
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

export default MyRent;