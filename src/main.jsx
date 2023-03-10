import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);