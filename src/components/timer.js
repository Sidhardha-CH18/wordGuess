import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  return (
    <div style={{color:'white'}}>
      <h2>{seconds}</h2>
    </div>
  );
}

export default Timer;