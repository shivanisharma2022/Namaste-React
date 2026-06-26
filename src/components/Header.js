import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-bold"><Link to="/">Home</Link></li>
          <li className="px-4 font-bold"><Link to="/about">About Us</Link></li>
          <li className="px-4 font-bold"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold">Cart</li>
          <button
            className="px-4 font-bold"
            onClick={() => {
              //setBtnName(btnName === "Login" ? "Logout" : "Login");
              //btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
