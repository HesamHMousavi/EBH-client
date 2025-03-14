import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import Configurator from "./Configurator";

const Config = () => {
  return (
    <div>
      <Header />
      <Configurator config={null} />
      <Footer />
    </div>
  );
};

export default Config;
