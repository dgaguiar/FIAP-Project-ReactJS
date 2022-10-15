import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MuiThemes from "./Utils/Common/MuiThemes";
import Router from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemes>
        <Router />
      </MuiThemes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);

reportWebVitals();