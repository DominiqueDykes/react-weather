import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Dominique Dykes and is{""}{" "}
          <a
            href="https://github.com/DominiqueDykes/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
