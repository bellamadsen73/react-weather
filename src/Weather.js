import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
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
  );
}