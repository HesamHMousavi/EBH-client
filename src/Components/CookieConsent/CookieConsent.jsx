import React, { useState, useEffect } from "react";
import "./CookieConsent.css"; // Import the CSS file

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(null);

  useEffect(() => {
    // Check if the user has already made a choice
    const savedPreference = localStorage.getItem("cookieConsent");
    if (!savedPreference) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookiesAccepted("accepted");
    setShowPopup(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setCookiesAccepted("rejected");
    setShowPopup(false);
  };

  const handleCustomise = () => {
    alert("Customise cookie preferences (implement this feature)");
  };

  return (
    showPopup && (
      <div className="cookie-consent">
        <h3>We value your privacy</h3>
        <p>
          We use cookies to enhance your browsing experience, serve personalised
          ads or content, and analyse our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
        <div className="cookie-buttons">
          {/* <button className="customise" onClick={handleCustomise}>
            Customise
          </button> */}
          <button className="reject" onClick={handleRejectAll}>
            Reject All
          </button>
          <button className="accept" onClick={handleAcceptAll}>
            Accept All
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
