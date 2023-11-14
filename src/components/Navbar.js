import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import profile from "../images/profile.png";
import cogWheel from "../images/cogwheel.svg";

function Navbar({ userName, setDashboardDisplay }) {
  const [navbarTitle, setNavbarTitle] = useState("Data Insights Hub");
  function toggleScreens() {
    setDashboardDisplay((dashboardDisplay) => !dashboardDisplay);
    navbarTitle == "Data Insights Hub"
      ? setNavbarTitle("Setup, Simulate & Synchronize")
      : setNavbarTitle("Data Insights Hub");
  }
  return (
    <div className="Navbar">
      <div className="nav-left">
        <img src={logo} />
        <div
          className="navitem logotext"
          onClick={() => {
            setDashboardDisplay(true);
          }}
        >
          Snaplogic
        </div>
      </div>
      <div className="nav-middle">{navbarTitle}</div>
      <div className="nav-right">
        <h5 className="username">{userName}</h5>
        <img src={profile} />
        <img
          src={cogWheel}
          className="navbar-cogwheel"
          onClick={toggleScreens}
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
