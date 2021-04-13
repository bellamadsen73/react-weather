import React from "react";
import "./Temperature.css";


export default function Temperature() {

  
  return (
    <div className="row">
      <div className="col-2">
        <h3 id="temperature">10</h3>
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
}

