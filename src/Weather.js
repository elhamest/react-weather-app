import React, { useState, useEffect } from "react";
import Axios from "axios";
import WeatherInfo from "./WeatherInfo";
import SearchIcon from "./SearchIcon";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    //alert("handle response start");
    setWeatherData({
      ready: true,
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
    console.log(response.data);
    //alert(`handle response end! ${weatherData.ready} and ${weatherData.temperature}`);
  }

  function callWeatherApi() {
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    //console.log(apiUrl);

    Axios.get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
        alert("Sorry, an error occurred while fetching weather data.");
      });
  }

  useEffect(() => {
    //alert("im in use effect");
    callWeatherApi();
  }, []);

  function handleCityChange(event) {
    setCity(event.target.value); //bejash bayad dar handleSubmit bashad
    //alert("city is set");
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(`I'm in handleSubmit: city is: ${city}`);
    callWeatherApi();
  }

  //alert(`I'm before if, ${weatherData.ready} and ${weatherData.temperature}`);

  if (weatherData.ready) {
    //alert(`I'm in if! ${weatherData.ready} and ${weatherData.temperature}`);

    return (
      <div className="Weather">
        <div className="container">
          <WeatherInfo data={weatherData} />

          <form className="search-container" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search..."
              className="search-input"
              onInput={handleCityChange}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    //alert("call weather api with default city...");
    //callWeatherApi();
    return <div>Loading...</div>;
  }
}
