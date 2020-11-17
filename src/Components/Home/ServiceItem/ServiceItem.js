import React from "react";

const ServiceItem = (props) => {
  const { icon, serviceTitle, serviceDescription } = props.item;
  return (
    <div className="col-md-4">
      <div className="text-center color-1">
        <img src={icon} className="w-25" alt="" />
        <h4 className="my-3">{serviceTitle}</h4>
        <p className="text-secondary">{serviceDescription}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
