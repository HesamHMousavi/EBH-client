import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import Banner from "./Banner";
import ServiceFeatures from "./ServiceFeatures";
import MyStory from "./MyStory";
import ContactBanner from "./ContactBanner";
import ContactSection from "../Home/ContactSection";
import TestimonialSlider from "../Home/TestimonialSlider";

const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MyStory />
      <ServiceFeatures />
      <ContactBanner />
      <ContactSection />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default About;
