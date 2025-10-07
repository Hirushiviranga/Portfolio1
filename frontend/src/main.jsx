import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Vendor CSS
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";


// Custom CSS
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

