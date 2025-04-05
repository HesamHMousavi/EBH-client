import React from "react";
import "./Banner.css";
import bannerImage from "../../../Images/hero2.jpg";

const Banner = () => {
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}></div>
  );
};

export default Banner;
