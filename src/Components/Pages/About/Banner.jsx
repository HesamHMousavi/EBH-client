import React from "react";
import "./Banner.css";
import bannerImage from "../../../Images/PIC9.jpg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-overlay">
        <h1 className="banner-text">ABOUT FLEURÈ</h1>
      </div>
    </div>
  );
};

export default Banner;
