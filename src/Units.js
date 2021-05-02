import React, { useState } from "react";

export default function Units(props) {
const [unit, setUnit] = useState("celsius");
function convertToFahrenheit(event) {
event.preventDefault();
setUnit("fahrenheit");
}
function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}
if (unit === "celsius") {
      return (
       <div className="units">
           <h3 className="temperature">{Math.round(props.celsius)}<span className="degrees"><strong>°C</strong>|{" "}<a href="/" onClick={convertToFahrenheit}>°F</a>
           </span></h3>
           </div>
        
) 
}
 else {
    let fahrenheit = (props.celsius * 9/5) + 32;    
    return (
       <div className="units">
           <h3 className="temperature">{Math.round(fahrenheit)}<span className="degrees"><a href="/" onClick={convertToCelsius}>°C</a>{" "}|<strong>°F</strong>
           </span></h3>
           </div>
        );
}
}
