import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { houseRentItemContext, userContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './MyRent.scss';

const MyRent = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [houseRentItem, setHouseRentItem] = useContext(houseRentItemContext);

    console.log(loggedInUser);

    useEffect(() => {
        fetch(`https://scintillating-rustic-egret.glitch.me/customerOrders?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, []);

    return (
        <div className="my-rents container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 mt-5">
                    <div className="d-flex justify-content-between mb-5 mt-3">
                        <h3 className="mb-0">My Rents</h3>
                        <p>{loggedInUser.name}</p>
                    </div>
                    <div className="booking-table mx-auto bg-light" >
                       <div className="table-bordered rounded">
                            <table className="table table-borderless bg-none mx-auto p-4">
                                <thead>
                                    <tr className="bg-light">
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-none">
                                {
                                    bookings.map(order =>
                                        <tr className="border">
                                            <td>{order.name}</td>
                                            <td>{order.price}</td>
                                            <Link  to="/houseRentItemDetails"><td className="btn btn-primary">View Details</td></Link>
                                        </tr>)
                                }
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