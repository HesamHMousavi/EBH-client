import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";
import { IoStarSharp } from "react-icons/io5";

const testimonials = [
  {
    text: "Stunning designs in all jewellery pieces. Haven't seen gold jewellery like this anywhere else. Service was fantastic, very happy with my bracelet. Will be visiting again.",
    author: "RAV 91",
    stars: 5,
  },
  {
    text: "Excellent quality and customer service. The craftsmanship of the jewellery is outstanding. Highly recommend!",
    author: "LISA K.",
    stars: 4,
  },
  {
    text: "A wonderful experience shopping here. The designs are unique, and the staff is very knowledgeable and helpful.",
    author: "MOHAMMED A.",
    stars: 3,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true); // Start fade-in
      }, 500); // Match animation duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <p className="subheading">FROM THE PEOPLE</p>

      {/* Wrap both stars and content inside the fading div */}
      <div className={`testimonial-content ${fade ? "fade-in" : "fade-out"}`}>
        <div className="stars">
          <IoStarSharp color="#f1c40f" size={30} />
          <IoStarSharp color="#f1c40f" size={30} />
          <IoStarSharp color="#f1c40f" size={30} />
          <IoStarSharp color="#f1c40f" size={30} />
          <IoStarSharp color="#f1c40f" size={30} />
        </div>
        <p className="testimonial-text">"{testimonials[index].text}"</p>
        <p className="author">— {testimonials[index].author}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
