import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./WeatherContainer.css";
import Weather from "./Weather";
import Loader from "./Loader";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m"
        );
        if (res.status === 200) {
          setWeatherData(res.data);
          setError("");
        } else {
          throw new Error(`Failed to axios with status: ${res.status}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoader(false);
      }
    };
    getWeather();
  }, []);

  return (
    <div className="weather-container">
      {loader && <Loader />}
      {error && <p>{error}</p>}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

WeatherContainer.propTypes = {};

export default WeatherContainer;
