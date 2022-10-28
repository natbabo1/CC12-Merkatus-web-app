import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import App from "./App";
import ModalContextProvider from "./contexts/ModalContext";
import AuthContextProvider from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import CartContextProvider from "./contexts/CartContext";
import LoadingContextProvider from "./contexts/LoadingContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoadingContextProvider>
      <AuthContextProvider>
        <ModalContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ModalContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
