import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="daily-forecast">MON</div>
          <WeatherIcon code="01d" size={56} />
          <div className="daily-temperature">
            <span className="forecast-max">19º </span>
            <span>|</span>
            <span className="forecast-min"> 10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
