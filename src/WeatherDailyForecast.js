import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDailyForecast() {
  return (
    <div className="WeatherDailyForecast">
      <div className="WeatherDailyForecast-card">
        <div className="WeatherDailyForecast-card-day">Tue</div>
        <WeatherIcon icon="10d" size="32" color="#a19a85" />
        <div className="WeatherDailyForecast-description">Clear</div>
        <div>
          <span className="WeatherDailyForecast-max">17</span> /
          <span className="WeatherDailyForecast-min">9</span> °C
        </div>
      </div>
    </div>
  );
}
