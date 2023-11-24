import "./App.css";
import "./styles/reset.css";
import { canciones } from "./js/canciones";
import ToggleSwitch from "./components/ToggleSwitch";
import DrumPad from "./components/DrumPad";
import { useEffect } from "react";
import { useState } from "react";

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
      <audio src="./audio/Heater1.mp3" id="asd"></audio>
      <div className="padContainer">
        <DrumPad
          src={canciones.Q.src}
          idBtn="Q"
          idCancion={canciones.Q.id}
          src2="./src/audio/aaa.png"
        />
        <DrumPad src={canciones.W.src} idBtn="W" idCancion={canciones.W.id} />
        <DrumPad src={canciones.E.src} idBtn="E" idCancion={canciones.E.id} />
        <DrumPad src={canciones.A.src} idBtn="A" idCancion={canciones.A.id} />
        <DrumPad src={canciones.S.src} idBtn="S" idCancion={canciones.S.id} />
        <DrumPad src={canciones.D.src} idBtn="D" idCancion={canciones.D.id} />
        <DrumPad src={canciones.Z.src} idBtn="Z" idCancion={canciones.Z.id} />
        <DrumPad src={canciones.X.src} idBtn="X" idCancion={canciones.X.id} />
        <DrumPad src={canciones.C.src} idBtn="C" idCancion={canciones.C.id} />
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
