import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row mt-3">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="City">
        <h1>Lisbon</h1>
      </div>
      <div className="Description">
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="./images/cloud-sun.png"
            alt="Mostly Cloudy"
            className="Icon"
          />
          <span className="temperature">6</span>
          <span className="unit">ºC|F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
