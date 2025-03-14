import React, { useEffect, useState, useContext } from "react";
import { ClientContext } from "../../../Context/ClientState";
import { v4 as uuidv4 } from "uuid";
import "./Configurator.css";

const Configurator = () => {
  const [config, setConfig] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [missingFields, setMissingFields] = useState([]); // Track missing fields
  const { SelectedProduct, AddCart, SetAlert } = useContext(ClientContext);

  useEffect(() => {
    const prod = SelectedProduct || JSON.parse(localStorage.getItem("PRODUCT"));
    setConfig(prod);
  }, [SelectedProduct]);

  const handleOptionChange = (type, value) => {
    setSelectedOptions((prev) => {
      // Remove field from missingFields once filled
      if (value.toString().trim() !== "") {
        setMissingFields((prevMissing) =>
          prevMissing.filter((field) => field !== type)
        );
      }
      return { ...prev, [type]: value };
    });
  };

  const formatLabel = (str) => {
    if (typeof str !== "string") return str;
    return str
      .split(" ")
      .map((word) =>
        word
          .split("-")
          .map((part) => part?.charAt(0)?.toUpperCase() + part?.slice(1))
          .join("-")
      )
      .join(" ");
  };

  const formatSingleWord = (str) => {
    if (typeof str !== "string") return "";
    return str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (char) => char.toUpperCase());
  };

  // ✅ Validation function
  const validateSelection = () => {
    if (!config) return false;

    const missing = [];

    const hasFeathers = selectedOptions.accessory === "feathers";
    const hasBalloons = selectedOptions.accessory === "mini-balloons";

    for (const key in config.attributes) {
      if (
        key === "balloonColorScheme" &&
        hasBalloons &&
        !selectedOptions[key]
      ) {
        missing.push(key);
      } else if (
        key === "featherColors" &&
        hasFeathers &&
        !selectedOptions[key]
      ) {
        missing.push(key);
      } else if (
        key !== "balloonColorScheme" &&
        key !== "featherColors" &&
        (!selectedOptions[key] || selectedOptions[key].toString().trim() === "")
      ) {
        missing.push(key);
      }
    }

    setMissingFields(missing); // Save missing fields

    return missing.length === 0;
  };

  const add = () => {
    if (!config) return;

    // Check if all required selections are made
    if (!validateSelection()) {
      SetAlert("Please select all required options.", "error");
      return;
    }

    const cartItem = {
      id: uuidv4(),
      ProductID: config._id,
      Category: config.category,
      image: config.image,
      Quantity: 1,
      name: config.name,
      price: config.price,
      PriceAtPurchase: config.price,
      Options: selectedOptions,
      selectedOptions,
    };

    AddCart(cartItem);
    setSelectedOptions({});
    SetAlert("Added to cart");
  };

  const desc = config?.description;
  delete config?.attributes?.description;

  return (
    config && (
      <div className="max-width">
        <div className="bouquet-container">
          <div className="bouquet-images">
            <img
              src={config.image}
              alt={config.name}
              className="bouquet-main-image"
            />
            <h2 className="bouquet-title">Description</h2>
            <p className="option-label">{desc || ""}</p>
          </div>

          <div className="bouquet-details">
            <h2 className="bouquet-title">{config.name.toUpperCase()}</h2>
            <p className="bouquet-price">
              From <strong>£{config.price}</strong>
            </p>

            {Object.entries(config.attributes).map(([key, value]) => {
              if (
                key === "featherColors" &&
                selectedOptions.accessory !== "feathers"
              )
                return null;
              if (
                key === "balloonColorScheme" &&
                selectedOptions.accessory !== "mini-balloons"
              )
                return null;
              return (
                <div className={`bouquet-option`} key={key}>
                  <p className="option-label">
                    {formatSingleWord(key.replace(/([A-Z])/g, " $1")?.trim())}
                  </p>
                  {Array.isArray(value) ? (
                    <>
                      <div className="option-buttons">
                        {value.map((choice, index) => (
                          <button
                            key={index}
                            className={`option-button ${
                              selectedOptions[key] === choice ? "selected" : ""
                            }`}
                            onClick={() => handleOptionChange(key, choice)}
                          >
                            {formatLabel(choice)}
                          </button>
                        ))}
                      </div>
                      {missingFields.includes(key) && (
                        <p className="error-text">Please select an option </p>
                      )}
                    </>
                  ) : (
                    <input
                      type="text"
                      className={`option-input ${
                        missingFields.includes(key) ? "error-border" : ""
                      }`}
                      placeholder="Type here..."
                      value={selectedOptions[key] || ""}
                      onChange={(e) => handleOptionChange(key, e.target.value)}
                    />
                  )}
                </div>
              );
            })}

            <div className="bouquet-note">
              <p className="option-label">Notes for the Florist</p>
              <textarea
                placeholder="Type your message here..."
                value={selectedOptions.notes || ""}
                onChange={(e) => handleOptionChange("notes", e.target.value)}
              />
            </div>

            <button className="add-to-cart" onClick={add}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Configurator;
