import { useState, useRef } from "react"; // import useState and useRef  and destructure 

export default function Player() {
  const [playerName, setPlayerName] = useState(null); // this is a state  that is use to set the name of the user

  let nameRef = useRef("");//creating Ref variable 

  function HandlerName() {


    if(nameRef.current.value !== "")  // check weather input field in empty or not 
    {
        setPlayerName(nameRef.current.value)// assign name is state variable
    }
    nameRef.current.value='' // here he clear the input field
  }
 

  return (
    <div className="player_container">
      <h2>welcome {playerName??'unknown entity'}</h2>
      <div className="inputBox">
        <input
         type="text" 
        ref={nameRef}  
         />
        <button onClick={HandlerName}>set Name</button>
      </div>
    </div>
  );
}
