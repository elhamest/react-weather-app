import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather Forecast </h1>
      <div className="container">
        <div className="container-flex">
          <div className="temperature-col1">
            <h2> Today </h2>
            <div> Thursday, Jan 4, 2022 </div>
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
            <h3>New York City</h3>
          </div>
          <div className="temperature-col2">
            <div className="description">
              <h3>Light Rain</h3>
              <ul>
                <li>Feels like: 2 °C</li>
                <li>Humidity: 13%</li>
                <li>Wind: 10 km/h</li>
              </ul>
            </div>
          </div>
          <div className="temperature-col3">
            <li>14:30</li>
            <li>Last updated: 13:40</li>
          </div>
        </div>
      </div>
    </div>
  );
}
