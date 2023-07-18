import React, { useState, useEffect } from "react";
import moment from "moment";
const targetTime = moment("2023-09-18");

function App() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="eirik"></div>
      <h1>Eirik er tilbake på kontoret om</h1>
      <p className="counter">
        <span>{days} dager </span>
        <span>{hours} timer </span>
        <span>{minutes} minutter </span>
        <span>{seconds} sekunder</span>
      </p>
      <div className="emoji"></div>
    </div>
  );
}

export default App;
