import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import BannerBalloon from "./BannerBalloon";
import BalloonGrid from "./BalloonGrid";
import TestimonialSlider from "../Home/TestimonialSlider";

const Balloons = () => {
  return (
    <div>
      <Header />
      <BannerBalloon />
      <BalloonGrid />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Balloons;
