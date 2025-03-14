import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import BannerBouque from "../Bouquets/BannerBouque";
import BouquetGrid from "../Bouquets/BouquetGrid";
import ProductGrid from "../Home/ProductGrid";
import Title from "../../Title/Title";

const Bouquets = () => {
  return (
    <div>
      <Header />
      <BannerBouque />
      <BouquetGrid />
      <Title title="Other Products" />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Bouquets;
