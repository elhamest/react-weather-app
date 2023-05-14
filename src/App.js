import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Weather defaultCity="Tehran" />
      <footer>
        <p>
          <a
            href="https://github.com/elhamest/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/elham-estedlali/"
            target="_blank"
            rel="noreferrer"
          >
            Elham Estedlali
          </a>
        </p>
      </footer>
    </div>
  );
}
