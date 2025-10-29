// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importing our main App component
import App from "./App";

// Importing CSS styles (so styles apply globally)
import "./index.css";

// This line finds the HTML element with id="root" in index.html
// and tells React to render our App inside it.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* App component runs inside React.StrictMode for extra checks */}
    <App />
  </React.StrictMode>
);
