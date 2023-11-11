import React, { useState } from "react";
import "../styles/SidePanel.css";
import search from "../images/search.png"
import integrationimg from "../images/integration.png"
import sort from "../images/sort.png"
const sample=["integration 01","integration 02","integration 03","integration 04","integration 05","integration 06","integration 07","integration 08","integration 09","integration 10"]
export default function SidePanel({integrations=sample}){
return <>
<div className="sidepanel">
    {<div className="searchbar" >
<p id="integrationheading">integrations</p>
<div>
<img id="sidepanelimg"src={sort}/>
<img id="sidepanelimg"src={search}/>
</div>
</div>}
{integrations.map(integration=>{
return <div className="integrationitem">
<img id="integrationimg" src={integrationimg} />
<p id="integrationtext">{integration}</p>
</div>
})}
</div>
</>

}