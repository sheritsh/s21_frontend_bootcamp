import React, { useState, useEffect } from "react";
import "../styles/Stopwatch.css";
import SomeList from "./SomeList";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;

    return formattedTime;
  };

  const handleAdd = () => {
    setValues([...values, formatTime(time)]);
  };

  const handleReset = () => {
    setValues([]);
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">{formatTime(time)}</p>
      <div class="btn-watch">
        <button class="btn-add" onClick={handleAdd}>
          Add
        </button>
        <button class="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      {values.length > 0 && <SomeList values={values} />}
    </div>
  );
};

export default Stopwatch;
