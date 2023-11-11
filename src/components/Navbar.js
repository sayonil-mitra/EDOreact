import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import profile from "../images/profile.png";

function Navbar({ userName, setDashboardDisplay }) {
  const [selectedItem, setItem] = useState(1);
  return (
    <div className="Navbar">
      <div className="nav-left">
        <img src={logo} />
        <div
          className="navitem logotext"
          onClick={() => {
            setDashboardDisplay(false);
          }}
        >
          EDOaaS
        </div>
        <div
          className={`navitem ${selectedItem == 1 ? "navitemselect" : ""}`}
          id="1"
          onClick={() => {
            setItem(1);
            setDashboardDisplay(false);
          }}
        >
          Setup, Simulate & Sync
        </div>
        <div
          className={`navitem ${selectedItem == 2 ? "navitemselect" : ""}`}
          id="2"
          onClick={() => {
            setItem(2);
            setDashboardDisplay(true);
          }}
        >
          Insights & Engagements
        </div>
      </div>
      <div className="nav-right" onClick={() => setDashboardDisplay(true)}>
        <h5 className="username">{userName}</h5>
        <img src={profile} />
        <select className="nav-select "></select>
      </div>
    </div>
  );
}

export default Navbar;
