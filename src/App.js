import "./App.css";
import Header from "./components/Header";
import Player from "./components/player";
import Challenge from "./components/Challenger_component";

function App() {
  return (
    <div className="header_Container">
      <Header />
      <Player />
      <div className="challenge_main_container">
        <Challenge title="easy" challenge_time={1} />
        <Challenge title="not easy" challenge_time={5} />
        <Challenge title="getting tough" challenge_time={10} />
        <Challenge title="only for pro" challenge_time={15} />
      </div>
    </div>
  );
}

export default App;
