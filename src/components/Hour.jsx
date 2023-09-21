import React from "./Hour.css";
import PropTypes from "prop-types";
import {
  ImSad,
  ImNeutral,
  ImSmile,
  ImHappy,
  ImArrowUp2,
  ImArrowDown2,
} from "react-icons/im";
import { FaEquals } from "react-icons/fa6";

const Hour = ({ hourData }) => {
  console.log(hourData);
  return (
    <div className="hour">
      <div className="hour-data">{hourData.hour}</div>
      <div>
        {hourData.upOrDown === "up" ? (
          <ImArrowUp2 color="green" />
        ) : hourData.upOrDown === "down" ? (
          <ImArrowDown2 color="red" />
        ) : hourData.upOrDown === "same" ? (
          <FaEquals />
        ) : null}
      </div>
      <div>
        {Number(hourData.temp) < 10 ? (
          <ImSad />
        ) : Number(hourData.temp) < 15 ? (
          <ImNeutral />
        ) : Number(hourData.temp) < 20 ? (
          <ImSmile />
        ) : (
          <ImHappy />
        )}
      </div>
      <div>{hourData.temp}</div>
    </div>
  );
};

Hour.propTypes = {};

export default Hour;
