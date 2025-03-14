import React from "react";
import Navbar from "../..//Header/Navbar";
import Banner from "./Banner";
import OptionsBar from "./OptionsBar";
import ProductGrid from "./ProductGrid";
import HeroSection from "./HeroSection";
import Banner2 from "./Banner2";
import PopularProducts from "./PopularProducts";
import ContactSection from "./ContactSection";
import TestimonialSlider from "./TestimonialSlider";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OptionsBar />
      <ProductGrid />
      <HeroSection />
      <Banner2 />
      <PopularProducts />
      {/* <EventSection /> */}
      <ContactSection />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Home;
