import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


const firebaseConfig = {
  apiKey: "AIzaSyC49T08SOv-otS2-yy_mM43mWTj79KrH6E",
  authDomain: "ecomercecoder-e0b0b.firebaseapp.com",
  projectId: "ecomercecoder-e0b0b",
  storageBucket: "ecomercecoder-e0b0b.appspot.com",
  messagingSenderId: "114795946251",
  appId: "1:114795946251:web:27b174830f60360a2e020e",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
