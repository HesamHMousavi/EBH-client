import React, { useEffect, useState, useContext } from "react";
import { ClientContext } from "../../../Context/ClientState";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Configurator.css";

const Configurator = () => {
  const nav = useNavigate();
  const [config, setConfig] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [missingFields, setMissingFields] = useState([]);
  const [price, setPrice] = useState();
  const { SelectedProduct, AddCart, SetAlert } = useContext(ClientContext);
  useEffect(() => {
    const prod = SelectedProduct || JSON.parse(localStorage.getItem("PRODUCT"));
    setConfig(prod);
    setPrice(prod.price);
  }, [SelectedProduct]);

  const name = config?.category === "Balloon" ? "Message" : "Card Message";

  const handleOptionChange = (type, value) => {
    setSelectedOptions((prev) => {
      const updatedOptions = { ...prev };

      // If clicking the same option, deselect it
      if (updatedOptions[type] === value) {
        delete updatedOptions[type]; // Remove the selected option
      } else {
        updatedOptions[type] = value;
      }

      if (value.toString().trim() !== "") {
        setMissingFields((prevMissing) =>
          prevMissing.filter((field) => field !== type)
        );
      }

      const basePrice = config?.price || 0;
      let extraCharges = 0;

      const priceMap = {
        Bouquet: {
          "Options-3": { 30: 35, 50: 65, 100: 195 },
          "Options-2": { 30: 40, 50: 75, 100: 175 },
          "Options-1": { M: 8, L: 23, XL: 33 },
        },
        BloomAndBubbles: { M: 10, L: 20 },
        Hatbox: { M: 10, L: 20 },
      };

      if (config?.category in priceMap) {
        extraCharges +=
          priceMap[config.category]?.[config.optionSet]?.[
            updatedOptions.noOfRoses
          ] || 0;
        extraCharges += priceMap[config.category]?.[updatedOptions.Size] || 0;
      }

      if (updatedOptions.initials?.length > 1) {
        extraCharges += 2.5 * (updatedOptions.initials.length - 1);
      }

      if (
        ["Options-4", "Options-9", "Options-8"].includes(config?.optionSet) &&
        updatedOptions.leafOption
      ) {
        extraCharges += 2.99;
      }

      setPrice(basePrice + extraCharges);
      return updatedOptions;
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
        key === "leafOption" ||
        (key === "message" && config?.category !== "Balloon")
      )
        continue;

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

    setMissingFields(missing);
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
      stripeProductId: config.stripeProductId,
      stripePriceId: config.stripePriceId,
    };

    AddCart(cartItem);
    setSelectedOptions({});
    SetAlert("Added to cart");
  };

  const desc = config?.description;
  delete config?.attributes?.description;

  const onClick = () => {
    nav(-1);
  };

  return (
    config && (
      <div className="max-width">
        <div className="bouquet-container">
          <div className="bouquet-images">
            <span className="back" onClick={onClick}>
              <IoIosArrowBack color="#666" />
              <h4>Back</h4>
            </span>
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
              {config?.price === price ? "From " : "Total "}
              <strong>£{price.toFixed(2)}</strong>
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
                  {key === "initials" ? (
                    <p className="option-label">
                      Initials - First letter FREE additional letters £2.50 each
                      - Max 10 Letters
                    </p>
                  ) : (
                    <p className="option-label">
                      {key === "message"
                        ? name
                        : key === "leafOption"
                        ? "Optional Leafs  (£2.99)"
                        : formatSingleWord(
                            key.replace(/([A-Z])/g, " $1")?.trim()
                          )}
                    </p>
                  )}
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
                            {choice === "gray" ? "Grey" : formatLabel(choice)}
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
                      maxLength={key === "initials" ? 10 : undefined}
                      placeholder="Type here..."
                      value={selectedOptions[key] || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[a-zA-Z]*$/.test(value)) {
                          handleOptionChange(key, value);
                        }
                      }}
                    />
                  )}
                </div>
              );
            })}

            <div className="bouquet-note">
              <p className="option-label">
                {config.category === "Balloon"
                  ? "Order Notes"
                  : "Notes for the Florist"}
              </p>
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
