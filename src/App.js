import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity={"Cape Town"} />

        <footer>
          This project was coded by Palesa Mabote and is{" "}
          <a
            href="https://github.com/Palesa-Mabote/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
