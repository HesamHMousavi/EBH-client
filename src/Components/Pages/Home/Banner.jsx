import React from "react";
import "./Banner.css";
import bannerImage from "../../../Images/Hero1.jpg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-overlay-2">
        <h1 className="banner-text-2">The perfect gift for any occasion</h1>
      </div>
    </div>
  );
};

export default Banner;
