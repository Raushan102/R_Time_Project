import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel( { challenge_time, Result,Reset,timeRemaining }, ref) {
  let dialog = useRef();

  timeRemaining=(timeRemaining/1000).toFixed(2);

  let useLost=timeRemaining<=0;
  let Score=(1-timeRemaining/challenge_time)*100

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return(
   <dialog ref={dialog}>
     {useLost ? (
       <>
         <h2>you {Result}</h2>
         <p>
           the target time is <strong>{challenge_time} seconds</strong>
         </p>
         <p>
           you stopped the timer with <strong>{timeRemaining} seconds</strong>
         </p>
       </>
     ) : (
       <>
         <p>your score is {Score} %</p>
         <p>
           the target time is <strong>{challenge_time} seconds</strong>
         </p>
         <p>
           you stopped the timer with <strong>{timeRemaining} seconds</strong>
         </p>
       </>
     )}

     <form method="dialog" onSubmit={Reset}>
       <button>close</button>
     </form>
   </dialog>
 );
});

export default ResultModel;
