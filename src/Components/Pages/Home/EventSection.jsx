import React from "react";
import "./EventSection.css";
import eventImage from "../../../Images/IMG9.jpeg"; // Place your actual image here

const EventSection = () => {
  return (
    <div className="event-section-wrapper">
      <div className="event-section-content">
        <div className="event-text-block">
          <h2 className="event-heading">WE HOST EVENTS</h2>
          <p className="event-description">
            Creating stunning décor for every occasion!
          </p>
          <p className="event-description">
            From birthdays to weddings, we design bespoke setups with balloons,
            backdrops, and elegant styling — bringing your vision to life.
          </p>
          <p className="event-highlight">
            Fill out the contact form below to get started
          </p>
        </div>
        <div className="event-image-block">
          <img src={eventImage} alt="Event setup" className="event-image" />
        </div>
      </div>
    </div>
  );
};

export default EventSection;
