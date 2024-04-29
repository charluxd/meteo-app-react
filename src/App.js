import React from "react";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cities">
          <a href="">Lisbon</a>
          <a href="">Paris</a>
          <a href="">Sydney</a>
          <a href="">San Francisco</a>
        </div>

        <SearchEngine />
        <Weather />
        <div class="week-forecast">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/charlottelhm/" target="_blank">
            Charlotte Lee
          </a>{" "}
          and is open-sourced on{" "}
          <a href="https://github.com/charluxd/meteo-app-rect" target="_blank">
            Github
          </a>.
        </p>
      </footer>
    </div>
  );
}
