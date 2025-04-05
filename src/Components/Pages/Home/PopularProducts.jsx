import React from "react";
import "./PopularProducts.css";
import pic1 from "../../../Images/new/pic10.jpg";
import pic2 from "../../../Images/new/pic16.jpg";
import pic8 from "../../../Images/new/pic1.jpg";
import pic4 from "../../../Images/new/pic4.jpg";
import pic5 from "../../../Images/new/pic11.jpg";
import pic9 from "../../../Images/new/pic9.jpg";

const products = [
  { name: "Bloom and Bubbles", price: "£30", image: pic1 },
  { name: "Luxury Neutral Bouquet", price: "£30", image: pic2 },
  { name: "Spring Bouquet", price: "£30", image: pic8 },
  { name: "Pastel Hatbox", price: "£30", image: pic4 },
  { name: "Personalised Balloons", price: "£30", image: pic5 },
  { name: "Rose in Balloon", price: "£30", image: pic9 },
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
