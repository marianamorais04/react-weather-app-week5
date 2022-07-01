import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}º`;
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div>
      <div className="data-forecast">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={56} />
      <div className="data-temperature">
        <span className="forecast-max">{maxTemperature()} </span>
        <span>|</span>
        <span className="forecast-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
