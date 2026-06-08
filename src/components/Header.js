import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
             //setBtnName(btnName === "Login" ? "Logout" : "Login");
              //btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            if (btnName === "Login") {
              setBtnName("Logout");
            } else {
              setBtnName("Login");
            }
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
