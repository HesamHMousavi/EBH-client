import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import BannerHB from "./BannerHB";
import TestimonialSlider from "../Home/TestimonialSlider";
import Title from "../../Title/Title";
import HBGrid from "./HBGrid";

const HB = () => {
  return (
    <div>
      <Header />
      <BannerHB />
      <HBGrid />
      <Title title="Our Reviews" />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default HB;
