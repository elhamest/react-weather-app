import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDailyForecast(props) {
  let iconCode = props.data.weather[0].icon;
  let daycode = props.data.dt;
  let mainDescription = props.data.weather[0].main;

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }

  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }

  function day() {
    let date = new Date(daycode * 1000);
    let dayNo = date.getDay();
    const arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return arrDay[dayNo];
  }
  return (
    <div className="WeatherDailyForecast">
      <div className="WeatherDailyForecast-day">{day()}</div>
      <WeatherIcon icon={iconCode} size={32} color="#a19a85" />
      <div className="WeatherDailyForecast-description">{mainDescription}</div>
      <div className="WeatherDailyForecast-temperature">
        <span className="WeatherDailyForecast-temperature-max">
          {minTemperature()}
        </span>{" "}
        /{" "}
        <span className="WeatherDailyForecast-temperature-min">
          {maxTemperature()}
        </span>{" "}
        °C
      </div>
    </div>
  );
}
