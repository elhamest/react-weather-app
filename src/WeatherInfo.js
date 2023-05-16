import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col1">
        <h2 className="city">{props.data.cityName}</h2>
        <div className="current-date-time">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="col2">
        <div className="temperature-container">
          <WeatherIcon icon={props.data.icon} size={64} color="#a48b4c" />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="col3">
        <div className="description">
          <h3 className="description-title">{props.data.description}</h3>
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.humidity} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
