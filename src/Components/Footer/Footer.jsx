import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";
import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-section footer-logo">
          <img src={logo} alt="EventsByHaseeb Logo" />
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <p>
            <FaPhoneAlt /> 07585 626 475
          </p>
          <p>
            <FaEnvelope /> Eventsbyhaseeb@gmail.com
          </p>
          <div className="footer-socials">
            <FaInstagram
              className="footer-location-icon"
              size={30}
              color="#777"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/fleureuk/?igsh=cjNvbXM2ZGs5cWJ3#",
                  "_blank"
                )
              }
            />
            {/* <FaTiktok className="footer-location-icon" size={30} color="#777" />
            <FaSnapchatGhost
              className="footer-location-icon"
              size={30}
              color="#777"
            /> */}
          </div>
        </div>

        {/* Location Section */}
        <div className="footer-section footer-location">
          <FaMapMarkerAlt
            className="footer-location-icon"
            size={25}
            color="#777"
          />
          <p>
            40 Hollybank Road
            <br />
            Bradford
            <br />
            BD7 4QP
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>2025 EventsByHaseeb LTD. All rights reserved.</p>
        <a
          href="https://litwebs.co.uk"
          target="_blank"
          rel="noreferrer"
          className="powered-by"
        >
          Powered By Litwebs
        </a>
      </div>
    </footer>
  );
};

export default Footer;
