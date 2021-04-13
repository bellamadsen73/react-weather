import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";


export default function Temperature() {
  const [ready, setReady] = useState(false)
 const [temperature, setTemperature] = useState(null); 
 function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
 }
if(ready) {
  return (
    <div className="row">
      <div className="col-2">
        <h3 id="temperature">{temperature}</h3>
      </div>
      <div className="col-5">
        <div className="clearfix weather-temperature">
          <p className="degrees">
            <span className="units">
              <a href={" "} id="celsius" className="active">
                °C
              </a>{" "}
              |
              <a href={" "} id="fahrenheit">
                °F
              </a>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
} else {
  const apiKey="11a6bd137d38c9eff9b66fb017459c47";
let city ="London"
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
 
  axios.get(apiUrl).then(handleResponse);
  return "Loading"
  
}
}
