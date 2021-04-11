import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import "assets/main.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
