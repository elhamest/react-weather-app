import React from "react";
import WeatherDailyForecast from "./WeatherDailyForecast";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="card-container">
        <WeatherDailyForecast />
      </div>
    </div>
  );
}
