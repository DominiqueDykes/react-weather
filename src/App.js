import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by Dominique Dykes and is{""}{" "}
          <a
            href="https://github.com/DominiqueDykes/react-weather"
            target="_blank"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
