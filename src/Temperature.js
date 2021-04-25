import React, { useState } from "react";

import axios from "axios";
import "./styles.css";



export default function Temperature() {
 
 const [weatherData, setWeatherData] = useState({ ready: false }); 
 function handleResponse(response) {
   setWeatherData({
     ready: true,
     temperature: Math.round(response.data.main.temp),
     humidity: Math.round(response.data.main.humidity),
     description: response.data.weather[0].description,
     icon: "https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png",
     wind: Math.round(response.data.wind.speed),
     city: response.data.name,
     date: new Date(response.data.dt * 1000),
   })
    
 }
if(weatherData.ready) {
  return (
    <div className="row">
      <div className="col-4">
  <h1 id="city">{weatherData.city}</h1>
      <h2>
      
      </h2>
   
    
        <h3 id="temperature">{weatherData.temperature}<span className="degrees">°C|°F</span></h3>
        </div>
      <div className="col-4">
      <img
      src={weatherData.icon}
        alt={weatherData.description}
        id="icon"  />
        </div>
    
    <div className="col-4">
      <ul>
        <li id="description">{weatherData.description}</li>
        <li>
          Humidity: <span id="humidity"></span>{weatherData.humidity} %
        </li>
        <li>
          Wind: <span id="wind"></span> {weatherData.wind} km/h
        </li>
      </ul>
    </div>
          <div className="row">
            <div className="col-8">
        <input
          type="search"
          placeholder="Search for a city"
          id="search-form"
          autoComplete="off"
        />
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
