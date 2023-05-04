import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="container-col1">
          <h3>Today</h3>
          <div className="current-date"> Thursday, Jan 4, 2022 </div>
          <div className="current-time">14:30</div>
          <h2 className="city">New York City</h2>
        </div>
        <div className="container-col2">
          <div className="temperature">
            <div>
              <span className="temperature-number">30</span>
              <span className="temperature-unit">°C</span>
            </div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="container-col3">
          <div className="last-update">Last updated: 13:40</div>
          <div className="description">
            <h3 className="description-title">Light Rain</h3>
            <ul>
              <li>Feels like: 2 °C</li>
              <li>Humidity: 13%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
