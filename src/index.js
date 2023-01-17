import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "tw-elements";
import "./index.css";
import "./App.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { ModalCustomMessage } from "./components/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <ModalCustomMessage message="Bienvenido a devsafio!!!" type="success" /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
