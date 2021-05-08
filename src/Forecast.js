import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="weatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecastDay">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="forecastTemperature">
                        <span className="maxTemperature">19°</span>
                        <span className="minTemperature">10°</span>
                        </div> 
                </div>
            </div>

        </div>
    );
}