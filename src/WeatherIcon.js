import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
      alt={props.alt}
    />
  );
}
