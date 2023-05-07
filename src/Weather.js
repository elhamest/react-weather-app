import React, { useState } from "react";
import Axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({});
  /*let [city, setCity] = useState(props.city);*/
  let [loaded, setLoaded] = useState(false);

  function handleApiResponse(response) {
    console.log(response.data.dt);
    setWeatherData({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: response.data.dt,
      coordinate: response.data.coord,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  let city = props.city;

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    const apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    Axios.get(apiUrl).then(handleApiResponse);
    setLoaded(true);
  }
}
