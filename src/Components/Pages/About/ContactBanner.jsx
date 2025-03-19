import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div className="contact-banner-container">
      <p className="contact-banner-heading">
        <strong>Let’s make something beautiful together!</strong>
      </p>
      <p className="contact-banner-text">
        Get in touch today—send us a DM on{" "}
        <a
          href="https://www.instagram.com/fleureuk/?igsh=cjNvbXM2ZGs5cWJ3#"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-banner-link"
        >
          Instagram
        </a>{" "}
        or fill out the contact form. Let’s start planning your dream floral
        arrangement!
      </p>
    </div>
  );
};

export default ContactBanner;
