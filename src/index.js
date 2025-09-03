import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 1. Get a reference to the root DOM node
const rootElement = document.getElementById("root");

// 2. Create a root
const root = ReactDOM.createRoot(rootElement);

// 3. Render the app using the new root's render method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
