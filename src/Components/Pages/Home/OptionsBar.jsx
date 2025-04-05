import React from "react";
import "./OptionsBar.css";
import { useNavigate } from "react-router-dom";
import { FaTruck, FaHome } from "react-icons/fa";

const OptionsBar = () => {
  const nav = useNavigate();
  return (
    <div className='delivery-options-bar'>
      <div
        className='delivery-option-button'
        onClick={() => nav("/about", { state: { scrollToSections: true } })}>
        <FaTruck className='delivery-option-icon' />
        Delivery
      </div>
      <div
        className='delivery-option-button'
        onClick={() => nav("/about", { state: { scrollToSections: true } })}>
        <FaHome className='delivery-option-icon' />
        Collection
      </div>
    </div>
  );
};

export default OptionsBar;
