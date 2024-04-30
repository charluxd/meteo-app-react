import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [currentDate, setCurrentDate] = useState(getDate());

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getDate() {
    let today = new Date();
    // const day = today.getDay();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[today.getDay()];

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${day}, ${hours}:${minutes} `;
  }

  let form = (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a City"
          autoFocus={true}
          class="input-field"
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search" class="button-search"></input>
        <input type="submit" value="Current" class="button-current"></input>
      </form>

      {/* <div className="city-info">
        <h2>Lisbon</h2>
        <p>Monday 17:45</p>
        <p>Clouds</p>
        <img></img>
      </div>
      <div className="temperature-now">
        <span className="temperature">
          16
          <small>°C</small>
        </span>
        <div>
          <p>Precipitation: 55%</p>
          <p>Wind: 9km/h</p>
        </div>
      </div> */}
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="city-info">
          <h2>{city}</h2>
          <p>{currentDate}</p>
          <p>{weather.description}</p>
        </div>
        <div className="temperature-now">
          <span className="temperature">
            <img src={weather.icon}></img>
            {Math.round(weather.temperature)}
            <small>°C</small>
          </span>
          <div>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind: {weather.wind}km/h</p>
          </div>
        </div>

        <div className="week-forecast">
          <div className="daily-forecast">
            <p>{setCurrentDate}</p>
            <img src={weather.icon}></img>
            <h3>{Math.round(weather.temperature)}°C</h3>
          </div>
          <div className="daily-forecast">
            <p>{setCurrentDate}</p>
            <img src={weather.icon}></img>
            <h3>{Math.round(weather.temperature)}°C</h3>
          </div>
          <div className="daily-forecast">
            <p>{setCurrentDate}</p>
            <img src={weather.icon}></img>
            <h3>{Math.round(weather.temperature)}°C</h3>
          </div>
          <div className="daily-forecast">
            <p>{setCurrentDate}</p>
            <img src={weather.icon}></img>
            <h3>{Math.round(weather.temperature)}°C</h3>
          </div>
          <div className="daily-forecast">
            <p>{setCurrentDate}</p>
            <img src={weather.icon}></img>
            <h3>{Math.round(weather.temperature)}°C</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
