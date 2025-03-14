import React from "react";
import "./PopularProducts.css";
import pic1 from "../../../Images/new/pic10.jpg";
import pic2 from "../../../Images/new/pic2.jpg";
import pic3 from "../../../Images/new/pic3.jpg";
import pic4 from "../../../Images/new/pic12.jpg";
import pic5 from "../../../Images/new/pic5.jpg";
import pic6 from "../../../Images/new/pic11.jpg";

const products = [
  { name: "Balloons", price: "£30", image: pic1 },
  { name: "Birthday set up", price: "£30", image: pic2 },
  { name: "Birthday set up", price: "£30", image: pic3 },
  { name: "Proposal", price: "£30", image: pic4 },
  { name: "Birthday set up", price: "£30", image: pic5 },
  { name: "Birthday set up", price: "£30", image: pic6 },
];

const PopularProducts = () => {
  return (
    <div className="pp-container">
      <h2 className="pp-title">Most Popular Products</h2>
      <div className="pp-grid">
        {products.map((product, index) => (
          <div className="pp-card" key={index}>
            <img src={product.image} alt={product.name} className="pp-image" />
            <div className="pp-info">
              <p className="pp-name">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
