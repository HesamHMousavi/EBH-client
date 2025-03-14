import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import BannerBB from "./BannerBB";
import ProductGrid from "../Home/ProductGrid";
import Title from "../../Title/Title";
import BBGrid from "./BBGrid";

const BloomAndBubbles = () => {
  return (
    <div>
      <Header />
      <BannerBB />
      <BBGrid />
      <Title title="Other Products" />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default BloomAndBubbles;
