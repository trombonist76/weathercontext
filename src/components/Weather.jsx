import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "../contexts/LocationContext";
import api from "../api.json";
import Card from "./Card";

export default function Weather() {
  const [weather, setWeather] = useState([]);
  const { location } = useLocation();

  function setWeatherFromApi(city) {
    const url = "https://api.openweathermap.org/data/2.5/";
    const query = `weather?q=${city},tr`;
    const queryUrl = `${url}${query}&APPID=${api.apiKey}`;
    axios(queryUrl)
      .then((result) => result.data.coord)
      .then(({ lat, lon }) =>
        axios(`${url}onecall?lat=${lat}&lon=${lon}&units=metric&lang=tr&APPID=${api.apiKey}`).then(
          (result) => setWeather(result.data.daily)
        )
      );
  }

  useEffect(() => {
    setWeatherFromApi(location);
  }, [location]);

  return (
    <div>
      {weather.map(({dt,weather,temp},i) => (
        <Card key={i} date={dt} weather={weather} temp={temp}/>
      ))}
    </div>
  );
}
