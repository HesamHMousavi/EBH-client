import React, { useContext, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ClientContext } from "../../../Context/ClientState";
import "./Success.css";

const PaymentSuccess = () => {
  const [countdown, setCountdown] = useState(5);
  const { EmptyCart } = useContext(ClientContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(""));
    EmptyCart();
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="payment-wrapper">
      <FaCheckCircle className="payment-icon" />
      <h2>Payment Successful</h2>
      <p>
        Thank you for your purchase! Your transaction has been completed
        successfully.
      </p>
      <p className="redirect-message">
        Redirecting you to the homepage in{" "}
        <span className="countdown">{countdown}</span> seconds...
      </p>
    </div>
  );
};

export default PaymentSuccess;
