import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import Banner from "./Banner";
import MyStory from "./MyStory";
import ContactBanner from "./ContactBanner";
import Sections from "./Section";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToSections && sectionRef.current) {
      const yOffset = -100; // adjust this as needed
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // Remove the state after scrolling
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div>
      <Header />
      <Banner />
      <MyStory />
      <ContactBanner />

      {/* Wrap the section in a ref */}
      <div ref={sectionRef}>
        <Sections />
      </div>

      <Footer />
    </div>
  );
};

export default About;
