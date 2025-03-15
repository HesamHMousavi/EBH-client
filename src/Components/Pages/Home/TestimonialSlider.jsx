import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";
import { IoStarSharp } from "react-icons/io5";

const testimonials = [
  {
    text: "Absolutely stunning arrangements! Ordered a bouquet and balloons for a birthday, and they exceeded my expectations. Everything was fresh, elegant, and delivered on time. Will definitely be back!",
    author: "Emily R.",
    stars: 5,
  },
  {
    text: "Fleuré made my event magical! The floral arrangements were breathtaking, and the balloons added the perfect touch. Their attention to detail and quality is unmatched. Highly recommend!",
    author: "James L",
    stars: 4,
  },
  {
    text: "Beautiful flowers, amazing service! Ordered a surprise bouquet and balloons for my partner, and they loved it. The team at Fleuré truly knows how to make every occasion special!",
    author: "Sophia M",
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
