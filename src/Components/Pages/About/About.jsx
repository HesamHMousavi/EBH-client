import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import Banner from "./Banner";
import MyStory from "./MyStory";
import ContactBanner from "./ContactBanner";
import Sections from "./Section";

const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MyStory />
      {/* <ServiceFeatures /> */}
      <ContactBanner />
      <Sections />
      <Footer />
    </div>
  );
};

export default About;
