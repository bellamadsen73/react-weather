import React, { useState } from "react";
import axios from "axios";
import "./styles.css";


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
      <div className="col-4">
  <h1 id="city">Aarhus</h1>
      <h2 id="date">Last updated: Saturday 12:00</h2>
   
    
        <h3 id="temperature">{temperature}<span className="degrees">°C|°F</span></h3>
        </div>
      <div className="col-4">
      <img
        src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
        alt=""
        id="icon"  />
        </div>
    
    <div className="col-4">
      <ul>
        <li id="description">Cloudy</li>
        <li>
          Humidity: <span id="humidity"></span>80%
        </li>
        <li>
          Wind: <span id="wind"></span> 2 km/h
        </li>
      </ul>
    </div>
          <div className="row">
            <div className="col-4">
        <input
          type="search"
          placeholder="Search for a city"
          id="search-form"
          autoComplete="off"
        />
      </div>
    <div className="col-4">
        <input type="submit" value="🔍 Search" id="search-button" />
      
      </div>
      <div className="col-4">
        <button>
          <span role="img" aria-label="Pin">
            📍
          </span>
          Current
        </button>
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
