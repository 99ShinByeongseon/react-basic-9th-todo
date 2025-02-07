import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
