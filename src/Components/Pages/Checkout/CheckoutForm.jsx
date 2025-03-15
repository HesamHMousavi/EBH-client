import React, { useState, useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ClientContext } from "../../../Context/ClientState";
import img from "../../../Images/fff.png"; // Default image if needed
import "./CheckoutForm.css";

function CheckoutForm() {
  const { Cart, DeleteCart, SetAlert, CreateOrder } = useContext(ClientContext);
  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Move to next day
    return tomorrow.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };
  const [checkLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [total, setTotal] = useState(0);
  const [collectionDate, setCollectionDate] = useState(""); // Date for collection
  const [missingDate, setMissingDate] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [missingDelivery, setMissingDelivery] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    type: "",
    date: getTomorrow(),
  });

  const [formFields, setFormFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    street: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  useEffect(() => {
    setItems(Cart);
  }, [Cart]);

  useEffect(() => {
    const newSubtotal = items.reduce((sum, item) => sum + item.price, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shippingCost);
  }, [items, shippingCost]);

  const handleRemove = (id) => {
    DeleteCart(id);
  };

  // Handle input change & remove red border when filled
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setMissingFields((prev) => prev.filter((field) => field !== name));
    }
  };

  const handleDateChange = (e) => {
    setCollectionDate(e.target.value);
    setMissingDate(false);

    setShippingDetails((prev) => ({
      ...prev,
      date: e.target.value,
    }));
  };

  const getToday = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 10);
    return maxDate.toISOString().split("T")[0];
  };

  // Handle delivery selection
  const handleDeliverySelection = (method, cost) => {
    setDeliveryMethod(method);
    setShippingCost(cost);
    setMissingDelivery(false);

    setShippingDetails((prev) => ({
      ...prev,
      type: method,
      date: method !== "Collection" ? "N/A" : prev.date, // Reset date if not collection
    }));
  };

  // Validate inputs and delivery method
  const validateInputs = () => {
    const requiredFields = Object.keys(formFields);
    const emptyFields = requiredFields.filter(
      (field) => formFields[field].trim() === ""
    );

    setMissingFields(emptyFields);

    if (!deliveryMethod) {
      setMissingDelivery(true);
    }
    if (deliveryMethod === "Collection" && !collectionDate) {
      setMissingDate(true);
      return false;
    }

    return emptyFields.length === 0 && deliveryMethod !== "";
  };

  // Function to format selected options into a list with capitalized values
  const formatSelectedOptions = (options) => {
    if (!options || Object.keys(options).length === 0) {
      return <p className="no-options">No custom options</p>;
    }
    return (
      <ul className="options-list">
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, " $1"))}:{" "}
            <strong className="item-attr">
              {capitalizeFirstLetter(value)}
            </strong>
          </li>
        ))}
      </ul>
    );
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
  };

  const handleConfirmOrder = async () => {
    if (!validateInputs()) {
      SetAlert(
        "Please fill in all required fields and select a delivery method.",
        "error"
      );
      return;
    }
    const sanitizedProducts = Cart.map(
      ({ selectedOptions, id, price, name, image, ...rest }) => rest
    );
    setLoading(true);
    await CreateOrder({
      ...formFields,
      items: sanitizedProducts,
      ...shippingDetails,
    });
    setLoading(false);
    // SetAlert("Order Confirmed! Thank you for your purchase.");
  };

  if (Cart.length < 1)
    return (
      <div className="checkout-container-empty">
        <h1>Basket Empty</h1>
      </div>
    );

  return (
    <div className="checkout-container">
      <div className="form-section">
        <h2>Contact information</h2>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formFields.email}
          onChange={handleInputChange}
          className={missingFields.includes("email") ? "error-border" : ""}
        />

        <h2>Delivery Address</h2>
        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formFields.firstName}
            onChange={handleInputChange}
            className={
              missingFields.includes("firstName") ? "error-border" : ""
            }
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formFields.lastName}
            onChange={handleInputChange}
            className={missingFields.includes("lastName") ? "error-border" : ""}
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Apartment, House no, suite, etc."
          value={formFields.address}
          onChange={handleInputChange}
          className={missingFields.includes("address") ? "error-border" : ""}
        />
        <input
          type="text"
          name="street"
          placeholder="Street Name"
          value={formFields.street}
          onChange={handleInputChange}
          className={missingFields.includes("street") ? "error-border" : ""}
        />
        <div className="city-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formFields.city}
            onChange={handleInputChange}
            className={missingFields.includes("city") ? "error-border" : ""}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal code"
            value={formFields.postalCode}
            onChange={handleInputChange}
            className={
              missingFields.includes("postalCode") ? "error-border" : ""
            }
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formFields.phone}
          onChange={handleInputChange}
          className={missingFields.includes("phone") ? "error-border" : ""}
        />

        <h2>Delivery method</h2>
        <div className={`delivery-methods  `}>
          <div
            className={`method ${
              deliveryMethod === "Collection" ? "selected" : ""
            }`}
            onClick={() => handleDeliverySelection("Collection", 0)}
          >
            <h4>Collection</h4>
            <p>9:00 to 19:00</p>
            <span>Free</span>
          </div>
          <div
            className={`method ${
              deliveryMethod === "Express" ? "selected" : ""
            }`}
            onClick={() => handleDeliverySelection("Express", 5.0)}
          >
            <h4>Express</h4>
            <p>Next Day Delivery</p>
            <span>£5.00</span>
          </div>
        </div>
        {missingDelivery && (
          <p className="error-text" style={{ marginTop: "1rem" }}>
            Please select an option
          </p>
        )}
        {deliveryMethod === "Collection" && (
          <div className="date-selection">
            <h3>Select Collection Date</h3>
            <input
              type="date"
              value={collectionDate}
              onChange={handleDateChange}
              min={getToday()}
              max={getMaxDate()}
              // className={missingDate ? "error-border" : ""}
            />
          </div>
        )}
        {missingDate && (
          <p className="error-text" style={{ marginTop: "1rem" }}>
            Please select a collection date{" "}
          </p>
        )}
      </div>

      <div className="order-summary">
        <h2>Order summary</h2>
        <div className="order-items">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image || img} alt={item.name} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  {formatSelectedOptions(item.selectedOptions)}
                  <p className="item-price">£{item.price.toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleRemove(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="summary-totals">
          <p>
            Subtotal: <span>£{subtotal.toFixed(2)}</span>
          </p>
          <p>
            Shipping: <span>£{shippingCost.toFixed(2)}</span>
          </p>
          <p className="total">
            Total: <span>£{total.toFixed(2)}</span>
          </p>
        </div>

        {checkLoading ? (
          <div className="btn-loader">
            <span className="loader"></span>
          </div>
        ) : (
          <button className="confirm-btn" onClick={handleConfirmOrder}>
            Confirm order
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;
