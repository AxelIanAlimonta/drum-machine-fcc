import "./App.css";
import "./styles/reset.css";
import ToggleSwitch from "./components/ToggleSwitch";
import DrumPad from "./components/DrumPad";
import { useEffect } from "react";
import { useState } from "react";

import Heater1 from "./audio/Heater1.mp3";
import Heater2 from "./audio/Heater2.mp3";
import Heater3 from "./audio/Heater3.mp3";
import Heater4 from "./audio/Heater4.mp3";
import Clap from "./audio/Clap.mp3";
import OpenHH from "./audio/Open-HH.mp3";
import KicknHat from "./audio/Kick-n'-Hat.mp3";
import Kick from "./audio/Kick.mp3";
import ClosedHH from "./audio/Closed-HH.mp3";

function App() {
  const [txtDisplay, setTxtDisplay] = useState("");

  useEffect(() => {
    function keyDownHandler(e) {
      let audio = document.getElementById(`${e.key.toUpperCase()}`);
      if (audio) {
        audio.play();
        setTxtDisplay(audio.parentNode.id);
      }
    }

    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <div id="drum-machine">
      <audio src="./audio/Heater1.mp3"></audio>
      <div className="padContainer">
        <DrumPad src={Heater1} idBtn="Q" idCancion={"Heater1"} />
        <DrumPad src={Heater2} idBtn="W" idCancion={"Heater2"} />
        <DrumPad src={Heater3} idBtn="E" idCancion={"Heater3"} />
        <DrumPad src={Heater4} idBtn="A" idCancion={"Heater4"} />
        <DrumPad src={Clap} idBtn="S" idCancion={"Clap"} />
        <DrumPad src={OpenHH} idBtn="D" idCancion={"Open-HH"} />
        <DrumPad src={KicknHat} idBtn="Z" idCancion={"Kick-n'-Hat"} />
        <DrumPad src={Kick} idBtn="X" idCancion={"Kick"} />
        <DrumPad src={ClosedHH} idBtn="C" idCancion={"Closed-HH"} />
      </div>
      <div className="options">
        <div id="display" className="options-display">
          {txtDisplay}
        </div>
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default App;
