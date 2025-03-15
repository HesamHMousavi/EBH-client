import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import FuneralFlowers from "./FuneralSection";

const Funeral = () => {
  return (
    <div>
      <Header />
      <div className="banner-bouque-container">
        <h2 className="banner-bouque-title">FUNERAL FLOWERS</h2>
        <p className="banner-bouque-description">
          Whatever the occasion, we use only the highest quality bouquets,
          ensuring they look stunning and last beautifully. Whether it's a
          birthday, anniversary, or just because, our hand-crafted bouquets are
          sure to delight your loved ones.
        </p>
      </div>
      <FuneralFlowers />
      <Footer />
    </div>
  );
};

export default Funeral;
