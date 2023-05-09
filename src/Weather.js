import React, { useState } from "react";
import Axios from "axios";
import WeatherInfo from "./WeatherInfo";
import SearchIcon from "./SearchIcon";
import "./Weather.css";
//var fetchState = "none";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    //fetchState = "ready";
    console.log("response success: "); //delete it
    console.log(response.data); //delete it

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
  }

  function callWeatherApi() {
    console.log("call weather api...");
    //fetchState = "running";
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    Axios.get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Sorry, an error occurred while fetching weather data.");
        console.error(error);
        //fetchState = "none";
      });
  }

  function handleCityChange(event) {
    setCity(event.target.value); //bejash bayad dar handleSubmit bashad
  }

  function handleSubmit(event) {
    event.preventDefault();
    callWeatherApi();
  }

  //if (fetchState === "ready") {
  if (weatherData.ready) {
    //console.log("ready now!!!" + fetchState);
    console.log("page rendering...");
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
    //if (fetchState === "none") {
    console.log("else statement...");
    callWeatherApi();
    return <div>Loading...</div>;
  }
}
