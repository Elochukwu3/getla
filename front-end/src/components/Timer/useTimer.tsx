import { useState, useEffect } from "react";

function useTimer() {
  const [time, setTimer] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour: string = time.getHours().toString().padStart(2, "0");
  const min: string = time.getMinutes().toString().padStart(2, "0");
  const secs: string = time.getSeconds().toString().padStart(2, "0");

  return { hour, min, secs };
}

export default useTimer;
