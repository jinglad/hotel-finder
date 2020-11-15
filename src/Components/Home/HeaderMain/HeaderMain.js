import React from "react";
import "./HeaderMain.scss";

const HeaderMain = () => {
  return (
    <div className="header-main-container">
      <div className="header-main-text">
        <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
      </div>
      <div className="search-container">
        <input className="search-box" type="text" placeholder="Search..." />
        <input className="search-btn" type="button" value="Search" />
      </div>
    </div>
  );
};

export default HeaderMain;
