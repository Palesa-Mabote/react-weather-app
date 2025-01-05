import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "do6fecf0e5a63bf18abf3etb40ab41cb";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

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
