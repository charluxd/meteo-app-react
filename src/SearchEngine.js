import { formToJSON } from "axios";
import React from "react";
import "./App.css";

export default function SearchEngine() {
  return (
    <form>
      <input type="search" placeholder="Enter a City" class="input-field"></input>
      <input type="submit" value="Search"></input>
      <input type="submit" value="Current"></input>
    </form>
  );
}
