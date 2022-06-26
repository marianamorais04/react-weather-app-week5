import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather />
        </div>
        <div className="Footer">
          <p>
            This project was coded by Mariana Morais{" "}
            <a
              href="https://github.com/marianamorais04/react-weather-app-week5"
              target="_blank"
              rel="noreferrer"
            >
              open-source on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
