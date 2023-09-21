import "./Day.css";
import PropTypes from "prop-types";
import Hour from "./Hour";

const Day = ({ date, dayData }) => {
  return (
    <div className="main-container">
      <div className="day-container">
        <div className="day">Day: {date} </div>
        <div className="unit">°C</div>
      </div>
      {dayData.map((hourData, index) => (
        <Hour key={index} hourData={hourData} />
      ))}
    </div>
  );
};

Day.propTypes = {};

export default Day;
