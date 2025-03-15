import React from "react";
import "./Banner2.css";
import flowersImage from "../../../Images//hero2.jpg"; // Make sure this image path is correct

const Banner2 = () => {
  return (
    <div
      className="banner2"
      style={{ backgroundImage: `url(${flowersImage})` }}
    >
      <div className="banner2-overlay">
        <div className="banner2-content">
          {/* <h1>Essentials for every memory</h1> */}
          <div className="banner2-buttons">
            {/* <button className="banner2-button">Say Happy Birthday</button>
            <button className="banner2-button">Say Congratulations</button>
            <button className="banner2-button">Say I Love You</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
