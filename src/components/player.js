import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);

  let nameRef = useRef("");

  function HandlerName() {


    if(nameRef.current.value !== "")
    {
        setPlayerName(nameRef.current.value)
    }
    nameRef.current.value=''
  }
  console.log(typeof playerName );

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
