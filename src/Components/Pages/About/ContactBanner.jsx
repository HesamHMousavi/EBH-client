import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div className="contact-banner-container">
      <p className="contact-banner-heading">
        <strong>Let’s make something beautiful together!</strong>
      </p>
      <p className="contact-banner-text">
        Get in touch today, Reach out via DM on{" "}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-banner-link"
        >
          Instagram
        </a>{" "}
        or fill out the contact form — let’s start planning your perfect event.
      </p>
    </div>
  );
};

export default ContactBanner;
