import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./styles.css";



export default function Temperature(props) {
 const [weatherData, setWeatherData] = useState({ ready: false }); 
 const [city, setCity] = useState(props.defaultCity);
 function handleResponse(response) {
   setWeatherData({
     ready: true,
     temperature: Math.round(response.data.main.temp),
     humidity: Math.round(response.data.main.humidity),
     description: response.data.weather[0].description,
     icon: response.data.weather[0].icon,
     wind: Math.round(response.data.wind.speed),
     city: response.data.name,
     date: new Date(response.data.dt * 1000),
   })
    
 }

function search() {
 const apiKey="11a6bd137d38c9eff9b66fb017459c47";

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
 
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);

}

if(weatherData.ready) {
  return (
    
  <div>
    <WeatherInfo data={weatherData} />
          <div className="row">
            <div className="col-8">
        <form onSubmit={handleSubmit}>
          <input
          type="search"
          placeholder="Search for a city"
          id="search-form"
          autoComplete="off"
          onChange={handleCityChange}
        />
        <input type="submit" value="🔍 Search" id="search-button" />
      
      </form> 
      </div>  
      
      </div>
       </div>
  );
} else {
 search();
  return "Loading"
  
}
}
