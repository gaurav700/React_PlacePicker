import { useState, useEffect } from "react";
const TIMER = 3000;
export default function Progressbar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <progress value={remainingTime} max={TIMER} />;
}
