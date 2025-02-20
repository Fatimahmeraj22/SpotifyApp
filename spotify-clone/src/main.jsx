import React from 'react'
import ReactDom from 'react-dom/client'

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
