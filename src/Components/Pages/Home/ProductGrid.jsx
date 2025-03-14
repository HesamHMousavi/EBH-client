import React from "react";
import "./ProductGrid.css";
import balloonsImage from "../../../Images/new/pic10.jpg";
import bouquetsImage from "../../../Images/new/pic3.jpg";
import giftSetsImage from "../../../Images/new/pic4.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  { name: "Balloons", image: balloonsImage, link: "/balloons" },
  { name: "Bouquets", image: bouquetsImage, link: "/bouquets" },
  { name: "Hat Boxes", image: giftSetsImage, link: "/hatboxes" },
];

const ProductGallery = () => {
  const nav = useNavigate();
  const onClick = (route) => nav(route);
  return (
    <div className="gallery-grid">
      {products.map((product) => (
        <div className="gallery-item" key={product.name}>
          <div
            className="gallery-image"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="gallery-overlay">
              <h2 className="gallery-title">{product.name}</h2>
              <button
                className="gallery-button"
                onClick={() => onClick(product.link)}
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
