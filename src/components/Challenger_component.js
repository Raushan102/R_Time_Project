import { useState, useRef } from "react";

import React from "react";
import ResultModel from "./ResultModel";

export default function Challenge({ title, challenge_time }) {
  const [remainingTime, setRemainTime] = useState(challenge_time * 1000);
  let Time = useRef();
  let dialog = useRef();

  let TimerActive = remainingTime > 0 && remainingTime < challenge_time * 1000; // use to check weather timerActive or not

  if (remainingTime <= 0) {
    // to stop time if use unable to stop timer on time click on stop button
    clearInterval(Time.current); //clearinterval is a  function that is use to pause the time of setInterval
    dialog.current.showModal(); //  calling result component to show result
  }

  function resetTime() {
    setRemainTime(challenge_time * 1000); //reset time after time is over
  }

  function clickHandler() {
    Time.current = setInterval(() => {
      // Time is  a ref variable that is use to get actual time   and setInterval is a function
      setRemainTime((preRemainingTime) => preRemainingTime - 10); //  reduce the time on each 10 ms
    }, 10);
  }

  function PauseHandler() {
    //  to stop the time if user pause the time under the time period
    clearInterval(Time.current);
    dialog.current.showModal(); // again calling result component to show result
  }

  return (
    <>
      <ResultModel
        Result={"lost"}
        challenge_time={challenge_time} //here we inject the challenge the ResultModel
        ref={dialog} // this is ref variable that is use to connect to another ref variable that is in another component
        Reset={resetTime} // this is resetTime function  that is called by the ResultModel model if the close the pop-up means result
        timeRemaining={remainingTime}
      />
      <section className="challenge">
        <h2 className="Challenge_title">{title.toUpperCase()}</h2>
        <p className="challenge_time">{`${challenge_time} second${
          challenge_time > 1 ? "s" : ""
        }`}</p>
        <p>
          <button
            className="challenge_button"
            onClick={TimerActive ? PauseHandler : clickHandler}
          >
            {TimerActive ? "stop challenge" : "start Challenge"}
          </button>
        </p>
        <p className="challenge_paragraph">
          {TimerActive ? "timer is Running..." : "timer inactive"}
        </p>
      </section>
    </>
  );
}
