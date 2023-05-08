import React from "react";
import FormattedDate from "./FormattedDate";
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
        <div className="temperature">
          <div>
            <span className="temperature-number">
              {Math.round(props.data.temperature)}
            </span>
            <span className="temperature-unit">°C</span>
          </div>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
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