import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';

const ResultModel = forwardRef(function ResultModel( { challenge_time, Result,Reset,timeRemaining }, ref) {
  let dialog = useRef();

  timeRemaining=(timeRemaining/1000).toFixed(2);

  let useLost=timeRemaining<=0;
  let Score=Math.round((1-timeRemaining/challenge_time)*100)

  useImperativeHandle(ref, () => {  //  use imprativeHandler is use to make multiple connection between the two components
    return {
      showModal() {
        dialog.current.showModal();
      },
     
    };
  });


// below i use dialog element that is use to display pop-up  it is a spacial element that is use to display pop-up because it comes with many inbuilt attribute
// that male it more flexible to use like Open() showModel() this is show() this a  method that is use to display the pop-up
  return createPortal(
   <dialog ref={dialog} className="dialog">   
     {useLost ? (
       <>
         <h2 className="main_result">you {Result}</h2>
         <p>
           the target time is <strong>{challenge_time} seconds</strong>
         </p>
         <p>
           you stopped the timer with <strong>{timeRemaining} seconds</strong>
         </p>
       </>
     ) : (
       <>
         <p className="main_result">your score is <strong>{Score} %</strong></p>

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
   </dialog>,
   document.getElementById('model')
 );
});

export default ResultModel;
