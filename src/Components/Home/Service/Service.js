import React from 'react';
import fakeServiceData from '../../fakeServiceData';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Service.scss';

const Service = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-3">
            <span className="color-1">Service</span>
            </div>
            <h1 className="font-weight-bold color-2 text-center mb-5">We're an agency tailored to all <br/> clients needs that always delivers</h1>
            <div className="row my-5">
               {
                   fakeServiceData.map(item => <ServiceItem item={item}></ServiceItem>)
               }
           </div>
        </div>
    );
};

export default Service;