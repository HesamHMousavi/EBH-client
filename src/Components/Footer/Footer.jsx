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
        <div className="footer-logo">
          <img src={logo} alt="EventsByHaseeb Logo" />
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <FaPhoneAlt /> 07585 626 475
          </p>
          <p>
            <FaEnvelope /> Eventsbyhaseeb@gmail.com
          </p>
          <div className="footer-socials">
            <FaInstagram size={30} color="var(--text)" />
            <FaTiktok size={30} color="var(--text)" />
            <FaSnapchatGhost size={30} color="var(--text)" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="links-grid">
            <div className="links-column">
              <p>Homes</p>
              <p>Bouquet</p>
              <p>Balloons</p>
            </div>
            <div className="links-column">
              <p>About Us</p>
              <p>Gift Sets</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="footer-location">
          <FaMapMarkerAlt
            className="footer-location-icon"
            color="var(--text)"
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
