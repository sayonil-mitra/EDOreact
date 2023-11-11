import { useState } from "react";
import "../styles/Navbar.css";
import logo from '../images/logo.png';
import profile from '../images/profile.png'


function Navbar({userName="Jackie.c"}) {
  const [selectedItem,setItem]=useState(0)
  return <div className="Navbar">
<div className="nav-left">
  <img src={logo}/>
  <div className="navitem logotext">EDOaaS</div>
  <div className={`navitem ${selectedItem==1?"navitemselect":""}`} id="1" onClick={()=>setItem(1)}>setup,stimulate&Sync</div>
  <div className={`navitem ${selectedItem==2?"navitemselect":""}`} id="2" onClick={()=>setItem(2)}>Insights&Engagements</div>
</div>
<div className="nav-right"><h5 className="username">{userName}</h5>
<img src={profile}/>
<select>
</select>
</div>
  </div>;
}

export default Navbar;
