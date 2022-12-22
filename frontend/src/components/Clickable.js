import React from "react";
import '../styles/Clickable.css'


function Clickable(props) {
    return (
            <div className="clickable">
                <h3>{props.customerName}</h3>
                <div className="pet">
                    <span>{props.petName}</span>
                    <span>{props.race}</span>
                </div>
            </div>
    );
  }
  
  export default Clickable;
  