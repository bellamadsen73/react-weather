import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
return (
      <div className="WeatherInfo">
          <div className="row">
      <div className="col-5">
        
  <h1 id="city">{props.data.city}</h1>
      <h2>
      <FormattedDate date={props.data.date} />
      </h2>
   
    
        <h3 id="temperature">{props.data.temperature}<span className="degrees">°C|°F</span></h3>
        </div>
      <div className="col-4">
      <div className="float-left"><WeatherIcon code={props.data.icon} />
      
        </div>
    </div>
    <div className="col-3">
      <ul>
        <li id="description">{props.data.description}</li>
        <li>
          Humidity: <span id="humidity"></span>{props.data.humidity} %
        </li>
        <li>
          Wind: <span id="wind"></span> {props.data.wind} km/h
        </li>
      </ul>
    </div>
</div>
</div>
);
}