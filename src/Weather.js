import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="city-info">
        <h2>Lisbon</h2>
        <p>Monday 17:45</p>
        <p>Clouds</p>
        <img></img>
      </div>
      <div className="tempearture-now">
        <span className="temperature">
          16
          <small>°C</small>
        </span>
        <div>
          <p>Precipitation: 55%</p>
          <p>Wind: 9km/h</p>
        </div>
      </div>
    </div>
  );
}
