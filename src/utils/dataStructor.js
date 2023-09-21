const dataStructor = (weatherData) => {
  const {
    elevation,
    timezone,
    hourly: { temperature_2m, time },
  } = weatherData;

  const timeTemp = {};
  let oldTemp;

  time.forEach((timeElement, index) => {
    const today = new Date(timeElement);
    const date = today.getDate();

    const structuredTemp = temperature_2m[index].toFixed(1);

    const slicedTime = timeElement.slice(11);

    let upOrDown;
    if (!oldTemp) {
      upOrDown = "no";
    } else if (oldTemp < structuredTemp) {
      upOrDown = "up";
    } else if (oldTemp > structuredTemp) {
      upOrDown = "down";
    } else {
      upOrDown = "same";
    }

    const hourTemp = {
      hour: slicedTime,
      temp: structuredTemp,
      upOrDown: upOrDown,
    };

    if (!timeTemp[date]) {
      timeTemp[date] = [];
    }
    timeTemp[date].push(hourTemp);
    oldTemp = structuredTemp;
  });

  return {
    elevation,
    timezone,
    timeTemp,
  };
};

export default dataStructor;
