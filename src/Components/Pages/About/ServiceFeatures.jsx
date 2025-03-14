import React from "react";
import "./ServiceFeatures.css";
import img1 from "../../../Images/PIC1.jpg";
import img2 from "../../../Images/PIC6.jpg";
import img3 from "../../../Images/PIC7.jpg";

const ServiceFeatures = () => {
  const features = [
    {
      title: "Tailored to you",
      description:
        "I listen to your ideas and create designs tailored just for you.",
      image: img1,
    },
    {
      title: "Premium quality",
      description:
        "I use only the best materials to ensure long-lasting, high-quality décor.",
      image: img2,
    },
    {
      title: "Flawless execution",
      description:
        "I take care of every detail, so you can enjoy your celebration stress-free.",
      image: img3,
    },
  ];

  return (
    <div className="service-features-container">
      {features.map((feature, index) => (
        <div className="service-feature-card" key={index}>
          <img
            src={feature.image}
            alt={feature.title}
            className="feature-image"
          />
          <div className="feature-text">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
