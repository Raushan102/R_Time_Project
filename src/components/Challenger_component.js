import { useState, useRef } from "react";

import React from "react";
import ResultModel from "./ResultModel";

export default function Challenge({ title, challenge_time }) {
  const [remainingTime, setRemainTime] = useState(challenge_time * 1000);
  let Time = useRef();
  let dialog = useRef();

  let TimerActive = remainingTime > 0 && remainingTime < challenge_time * 1000;

  if (remainingTime <= 0) {
    clearInterval(Time.current);
    dialog.current.open();
  }

  function resetTime() {
    setRemainTime(challenge_time * 1000);
  }

  function clickHandler() {
    Time.current = setInterval(() => {
      setRemainTime((preRemainingTime) => preRemainingTime - 10);
    }, 10);
  }

  function PauseHandler() {
    clearInterval(Time.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModel
        Result={"lost"}
        challenge_time={challenge_time}
        ref={dialog}
        Reset={resetTime}
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
