import React from "react";
import "./FuneralSection.css";
import pic1 from "../../../Images/new/pic17.jpg";
import pic2 from "../../../Images/new/pic6.jpg";
import pic3 from "../../../Images/new/pic18.jpg";

const products = [
  {
    id: 1,
    name: "Love Heart Wreath",
    description: "Heartfelt floral tribute wreath",
    price: "£60.00",
    image: pic2, // Replace with actual image path
  },
  {
    id: 2,
    name: "Name tribute",
    description: "Personalised floral name tribute",
    price: "£30.00",
    image: pic1, // Replace with actual image path
  },
];

const FuneralFlowers = () => {
  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="order-section-0">
        <div className="order-info">
          <h2>HOW TO ORDER</h2>
          <p>Our funeral flowers are available for collection only.</p>
          <p>
            To place an order, please call us on the day, and we will create a
            thoughtful arrangement ready for you to collect.
          </p>
          <p className="contact">
            <strong>📞 To order, call us at</strong> 07585 626 475
          </p>
        </div>
        <img src={pic3} alt="Floral Tribute" className="banner-0" />
      </div>
    </div>
  );
};

export default FuneralFlowers;
