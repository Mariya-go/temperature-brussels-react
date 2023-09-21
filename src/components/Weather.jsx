import PropTypes from "prop-types";
import "./Weather.css";
import dataStructor from "../utils/dataStructor";
import Day from "./Day";

const Weather = ({ weatherData }) => {
  const structuredData = dataStructor(weatherData);
  const currentDate = new Date();
  const displayDate = currentDate.toDateString();

  return (
    <div className="weather">
      <h2>Today is {displayDate}</h2>

      {structuredData.timeTemp &&
        Object.entries(structuredData.timeTemp).map(([key, value], index) => (
          <Day key={index} date={key} dayData={value} />
        ))}
    </div>
  );
};

Weather.propTypes = {};

export default Weather;
