import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">26°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">26°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">26°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">26°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">26°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
