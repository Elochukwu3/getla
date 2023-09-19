import useTimer from "./useTimer";

function Timer() {
  const { hour, min, secs } = useTimer();
  console.log(secs);
  
  return (
    <div className="my-9 font-unical text-5xl flex gap-3 max-md:justify-center">
      <p>
        {hour} <span className="text-sm">H</span>
      </p>
      <p>
        {min} <span className="text-sm">M</span>
      </p>
      <p>
        {secs} <span className="text-sm">S</span>
      </p>
    </div>
  );
}

export default Timer;
