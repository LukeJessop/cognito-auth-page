import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";

import Img1 from "./SCSS/assets/background-images/1.jpg";
import Img2 from "./SCSS/assets/background-images/2.jpg";
import Img3 from "./SCSS/assets/background-images/3.jpg";
import Img4 from "./SCSS/assets/background-images/4.jpg";
import Img6 from "./SCSS/assets/background-images/6.jpg";
import Img7 from "./SCSS/assets/background-images/7.jpg";
import Img8 from "./SCSS/assets/background-images/8.jpg";
import Img9 from "./SCSS/assets/background-images/9.jpg";
import Img10 from "./SCSS/assets/background-images/10.jpg";
import Img11 from "./SCSS/assets/background-images/11.jpg";
import Img12 from "./SCSS/assets/background-images/12.jpg";
import Img13 from "./SCSS/assets/background-images/13.jpg";

const imgArr = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13
];
const generateImg = () => {
  let rand = Math.floor(Math.random() * imgArr.length);
  for (let i = 0; i < imgArr.length; i++) {
    if (rand === i) {
      return imgArr[i];
    }
  }
};

const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <img className="background_img" src={generateImg()}/>
        <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
