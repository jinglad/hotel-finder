import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { houseRentItemContext } from "../../../App";

const HouseRentItem = (props) => {
  const { name, img, bathroom, bedroom, location, price } = props.item;
  const [houseRentItem, setHouseRentItem] = useContext(houseRentItemContext);

  const handleHouseRentItemDetails = (item) => {
      setHouseRentItem(item);
  }
  
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-0 text-secondary">{location}</p>
          <div className="d-flex text-secondary">
            <p className="card-text mt-0">{bedroom} bedrooms</p>
            <p className="card-text ml-4 mt-0">{bathroom} bathrooms</p>
          </div>
          <div className="d-flex justify-content-between">
            <h3>${price}</h3>
            <Link to="/houseRentItemDetails" onClick={() => handleHouseRentItemDetails(props.item)} className="btn btn-primary">
                View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRentItem;
