import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  // const [temperature, setTemperature] = useState(props.temperature);
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="number">{Math.round(props.celsius)}</span>
        <span className="unit">
          <span className="unit-c">°C</span>
          <span className="unit-pipe"> | </span>
          <span className="unit-f">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="number">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <span>
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
          <span className="unit-pipe"> | </span>
          <span className="unit-f">°F</span>
        </span>
      </div>
    );
  }
}
