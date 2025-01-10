import React, { useState, useEffect } from 'react';
import './Preloader.css';

const CountUpPreloader = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : prev));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countup-loader">
      <div className="countup-text">{count}%</div>
    </div>
  );
};

export default CountUpPreloader;
