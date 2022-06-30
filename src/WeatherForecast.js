import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "3ecaba3242cde6b1539ea995288cd337";
  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
