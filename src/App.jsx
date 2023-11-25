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
      let key = `${e.key.toUpperCase()}`;
      let audio = document.getElementById(key);
      if (audio) {
        playSound(key, audio.parentNode.id);
      }
    }

    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  function playSound(idBtn, idCancion) {
    let sound = document.getElementById(`${idBtn}`);
    sound.play();
    setTxtDisplay(`${idCancion}`);
  }

  return (
    <div id="drum-machine">
      <div className="padContainer">
        <DrumPad
          src={Heater1}
          idBtn="Q"
          onClick={playSound}
          idCancion={"Heater 1"}
        />
        <DrumPad
          src={Heater2}
          idBtn="W"
          onClick={playSound}
          idCancion={"Heater 2"}
        />
        <DrumPad
          src={Heater3}
          idBtn="E"
          onClick={playSound}
          idCancion={"Heater 3"}
        />
        <DrumPad
          src={Heater4}
          idBtn="A"
          onClick={playSound}
          idCancion={"Heater 4"}
        />
        <DrumPad src={Clap} idBtn="S" onClick={playSound} idCancion={"Clap"} />
        <DrumPad
          src={OpenHH}
          idBtn="D"
          onClick={playSound}
          idCancion={"Open-HH"}
        />
        <DrumPad
          src={KicknHat}
          idBtn="Z"
          onClick={playSound}
          idCancion={"Kick-n'-Hat"}
        />
        <DrumPad src={Kick} idBtn="X" onClick={playSound} idCancion={"Kick"} />
        <DrumPad
          src={ClosedHH}
          idBtn="C"
          onClick={playSound}
          idCancion={"Closed-HH"}
        />
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
