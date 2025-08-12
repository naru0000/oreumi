import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
