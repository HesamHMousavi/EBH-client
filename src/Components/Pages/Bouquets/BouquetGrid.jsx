import React, { useContext, useEffect, useState } from "react";
import "./BouquetGrid.css";
import { ClientContext } from "../../../Context/ClientState";
import { useNavigate } from "react-router-dom";

const BouquetGrid = () => {
  const { SetProduct, Products, prodLoading } = useContext(ClientContext);
  const [products, setProducts] = useState();
  const nav = useNavigate();
  const onNav = (type) => {
    SetProduct(type);
    nav("/config");
  };
  useEffect(() => {
    if (Products) {
      const filteredProducts = Products.filter(
        (product) => product.category === "Bouquet" && product.hidden !== true
      );
      // console.log(Products);
      setProducts(filteredProducts);
    }
  }, [Products]);
  return prodLoading ? (
    <div className="loader-con vh50">
      <span className="loader"></span>
    </div>
  ) : products?.length > 0 ? (
    <div className="bouquet-grid-container">
      <div className="bouquet-grid">
        {products?.map((bouquet, index) => (
          <div className="bouquet-card" key={index}>
            <img
              src={bouquet.image}
              alt={bouquet.name}
              className="bouquet-image"
            />
            <div className="bouquet-info">
              <h3 className="bouquet-name">{bouquet.name}</h3>
              {bouquet.description && (
                <p className="bouquet-description">
                  {bouquet.description.slice(0, 50)}
                  {bouquet.description.length > 50 && "..."}
                </p>
              )}
              <div className="btn-con">
                <p className="bouquet-price-2">£{bouquet.price}</p>
                <button onClick={() => onNav(bouquet)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="not-av">
      <h1> Products Currently Not Available</h1>
    </div>
  );
};

export default BouquetGrid;
