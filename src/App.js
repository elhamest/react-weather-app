import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather Forecast </h1>
      <Weather city="Tehran" />
    </div>
  );
}
