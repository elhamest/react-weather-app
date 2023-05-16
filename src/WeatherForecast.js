import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDailyForecast from "./WeatherDailyForecast";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  /*console.log(
    `this coordinates are recieved: ${props.coordinate.lat} and ${props.coordinate.lon}`,
  );*/

  useEffect(() => {
    setReady(false);
  }, [props.coordinate]);

  function handleResponse(response) {
    /*console.log("Forecast responsed successfully: ");
    console.log(response.data);*/

    setForecast(response.data.daily);
    setReady(true);
  }

  function callForecastApi() {
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinate.lat}&lon=${props.coordinate.lon}&exclude={minutely}&appid=${apiKey}&units=${units}
`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Sorry, an error occurred while fetching weather data.");
        console.error(error);
      });
  }

  if (ready) {
    /*console.log("Forecast is rendering...");
    console.log({ forecast });*/

    return (
      <div className="WeatherForecast">
        <div className="WeatherForecast-container">
          {forecast.map(function (daily, index) {
            if (index < 6) {
              return (
                <div className="WeatherForecast-card" key={index}>
                  <WeatherDailyForecast data={daily} />{" "}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    /*console.log("Calling Forecast Api...");*/
    callForecastApi();
    return null;
  }
}
