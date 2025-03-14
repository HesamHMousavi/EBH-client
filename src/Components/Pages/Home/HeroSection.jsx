import React from "react";
import "./HeroSection.css";
import bouquetImage from "../../../Images/new/pic1.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${bouquetImage})` }}
      ></div>
      <div className="hero-text">
        <h2>
          <strong>ELEVATE EVERY MOMENT</strong>
        </h2>
        <p>with</p>
        <p>Celebration essentials and more</p>
      </div>
    </div>
  );
};

export default HeroSection;
