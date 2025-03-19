import React, { useContext, useEffect, useState } from "react";
import "./HBGrid.css";
import { ClientContext } from "../../../Context/ClientState";
import { useNavigate } from "react-router-dom";

const HBGrid = () => {
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
        (product) => product.category === "Hatbox" && product.hidden !== true
      );
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
        {products?.map((product, index) => (
          <div className="bouquet-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="bouquet-image"
            />
            <div className="bouquet-info">
              <h3 className="bouquet-name">{product.name}</h3>
              {product.description && (
                <p className="bouquet-description">
                  {product.description.slice(0, 50)}
                  {product.description.length > 50 && "..."}
                </p>
              )}
              <div className="btn-con">
                <p className="bouquet-price">£{product.price}</p>
                <button onClick={() => onNav(product)}>Buy Now</button>
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

export default HBGrid;
