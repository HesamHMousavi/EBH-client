import React, { useContext, useEffect, useState } from "react";
import "./BalloonGrid.css";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../../Context/ClientState";

const BalloonGrid = () => {
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
        (product) => product.category === "Balloon" && product.hidden !== true
      );
      setProducts(filteredProducts);
    }
  }, [Products]);
  return prodLoading ? (
    <div className="loader-con vh50">
      <span className="loader"></span>
    </div>
  ) : products?.length > 0 ? (
    <div className="balloon-grid-container">
      <div className="balloon-grid">
        {products?.map((balloon, index) => (
          <div className="balloon-card" key={index}>
            <img
              src={balloon.image}
              alt={balloon.name}
              className="balloon-image"
            />
            <div className="balloon-info">
              <p className="balloon-name">{balloon.name}</p>
              {balloon.description && (
                <p className="bouquet-description">
                  {balloon.description.slice(0, 50)}
                  {balloon.description.length > 50 && "..."}
                </p>
              )}
              <div className="balloon-footer">
                <p className="balloon-price-2">£{balloon.price}</p>
                <button
                  className="balloon-buy-button"
                  onClick={() => onNav(balloon)}
                >
                  Buy Now
                </button>
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

export default BalloonGrid;
