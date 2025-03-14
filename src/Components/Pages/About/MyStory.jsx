import React from "react";
import "./MyStory.css";
import storyImage from "../../../Images/IMG16.jpg"; // Update with your real image path

const MyStory = () => {
  return (
    <div className="my-story-container">
      <div className="my-story-content">
        <h2 className="my-story-title">My Story</h2>
        <p className="my-story-text">
          Fleurè started from a simple love for creativity and celebrations. At
          just 16, I began styling balloons, turning a passion into a business.
          Since then, I’ve had the privilege of helping people across Bradford
          and beyond transform their events with unique, high-quality décor.
        </p>
        <p className="my-story-text">
          My journey has even been featured in the Telegraph & Argus,
          highlighting my dedication to creating magical moments.
        </p>
        <p className="my-story-text">
          I specialise in bespoke balloon designs, elegant event décor, and
          thoughtful gift sets to make every occasion special. Whether you’re
          looking for bold balloon arches, personalised bouquets, or full event
          styling, I’ll bring your vision to life with care and creativity.
        </p>
      </div>

      <div className="my-story-image-wrapper">
        <img
          src={storyImage}
          alt="My Story Feature"
          className="my-story-image"
        />
      </div>
    </div>
  );
};

export default MyStory;
