import React from "react";
import "./OptionsBar.css";
import { FaTruck, FaHome } from "react-icons/fa";

const OptionsBar = () => {
  return (
    <div className="delivery-options-bar">
      <div className="delivery-option-button">
        <FaTruck className="delivery-option-icon" />
        Delivery
      </div>
      <div className="delivery-option-button">
        <FaHome className="delivery-option-icon" />
        Collection
      </div>
    </div>
  );
};

export default OptionsBar;
