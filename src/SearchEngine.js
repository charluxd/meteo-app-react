import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SearchEngine() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(null);
  function displayWeather(response) {
    setCity(response.data.main.temp);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a City"
            autoFocus={true}
            class="input-field"
            // onChange={updateCity}
          ></input>
          <input type="submit" value="Search" class="button-search"></input>
          <input type="submit" value="Current" class="button-current"></input>
        </form>

        <div className="city-info">
          <h2>{city}</h2>
          <p>9th May</p>
          <p>Cloudy</p>
        </div>
        <div className="row">
          <div className="col-9 temperature-now">
            <span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="temperature-icon"
              ></img>
            </span>
            <span className="temperature-degree">15</span>
            <span className="temperature-unit">°C</span>
          </div>
          <div className="col-3">
            <p>Humidity: 15%</p>
            <p>Wind: 73km/h</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2ff29bed3181c3526c35cc5408037f85";
    let city = "New York";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
