import React from 'react';
import fakeHouseRentData from '../../../fakeHouseRentData';
import HouseRentItem from '../HouseRentItem/HouseRentItem';
import './HouseRent.scss';

const HouseRent = () => {
    const fakeData = fakeHouseRentData;
    return (
        <div className="container mt-5 house-rent-container">
            <div className="text-center mb-3">
            <span className="color-1">House rent</span>
            </div>
            <h1 className="font-weight-bold color-2 text-center mb-5">Discover the latest rent <br/> available today</h1>
           <div className="row">
               {
                   fakeData.map(item => <HouseRentItem item={item}></HouseRentItem>)
               }
           </div>
        </div>
    );
};

export default HouseRent;