import React, { useContext } from "react";
import { houseRentItemContext } from "../../../App";
import Navbar from "../../Reused/Navbar/Navbar";
import HouseRentItemDetailsHeader from "../HouseRentItem/HouseRentItemDetailsHeader/HouseRentItemDetailsHeader";
import './HouseRentItemDetails.scss';

const HouseRentItemDetails = () => {
  const [houseRentItem, setHouseRentItem] = useContext(houseRentItemContext);
  const {
    img1,
    img2,
    img3,
    img4,
    name,
    price,
    shortDescription,
    rent,
    serviceCharge,
    securityDeposit,
    flateReleasePolicy,
    address,
    flatSize,
    floor,
    roomCategory,
    facilities,
    additionalFacilities,
  } = houseRentItem;

  return (
    <div>
      <Navbar></Navbar>
      <HouseRentItemDetailsHeader></HouseRentItemDetailsHeader>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="item-details ml-2">
              <div className="d-flex justify-content-between mt-4">
                <h3>{name}</h3>
                <h3 className="color-2 mr-5">${price}</h3>
              </div>
              <div>
                <p className="text-secondary">{shortDescription}</p>
              </div>
              <div className="mt-3">
                <h4>Price Details-</h4>
                <p className="mt-2 text-secondary mb-0">
                  Rent/Month: ${rent}(negotiable)
                </p>
                <p className="text-secondary my-0">
                  Service Charge: {serviceCharge}/=Tk per month, subject to
                  change
                </p>
                <p className="text-secondary my-0">
                  Security Deposit: {securityDeposit} month's rent
                </p>
                <p className="text-secondary mt-0">
                  Flat Release Policy: {flateReleasePolicy} months earlier
                  notice required
                </p>
              </div>
              <div className="mb-5">
                <h4>Property Details-</h4>
                <p className="my-0 text-secondary">
                  Address and Area: {address}
                </p>
                <p className="my-0 text-secondary">Flat Size:  {flatSize} Sq Feet</p>
                <p className="my-0 text-secondary">Floor: {floor}</p>
                <p className="my-0 text-secondary">Room Category:{roomCategory}</p>
                <p className="my-0 text-secondary">Facilities: {facilities}</p>
                <p className="my-0 text-secondary">Additional Facilities: {additionalFacilities}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="form">
            <div className="form-group">
                <input type="text" className="text-secondary form-control-lg form-control" placeholder="Full name"/>
            </div>
            <div className="form-group">
                <input type="text" className="text-secondary form-control-lg form-control" placeholder="Phone No."/>
            </div>
            <div className="form-group">
                <input type="email" className="text-secondary form-control-lg form-control" placeholder="Email Address"/>
            </div>
            <div className="form-group">
                <textarea cols="30" rows="5" placeholder="Message" className="text-secondary form-control-lg form-control"></textarea>
            </div>
            <div className="form-group"> 
                <button className="btn btn-block btn-primary">Request Booking</button>
            </div>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRentItemDetails;
