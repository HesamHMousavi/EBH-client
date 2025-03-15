import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./Cancelled.css";

const Cancelled = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cancel-wrapper">
      <FaTimesCircle className="cancel-icon" />
      <h2>Payment Cancelled</h2>
      <p>
        Your transaction was not completed. If this was a mistake, please try
        again.
      </p>

      <p className="redirect-message">
        Redirecting you to the homepage in{" "}
        <span className="countdown">{countdown}</span> seconds...
      </p>
    </div>
  );
};

export default Cancelled;
