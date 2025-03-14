import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClientState } from "./Context/ClientState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClientState>
      <App />
    </ClientState>
  </React.StrictMode>
);
