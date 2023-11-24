import PropTypes from "prop-types";
import "../css/drumPad.css";

function DrumPad({ src, idBtn, idCancion }) {
  function reproducirSonido() {
    let sound = document.getElementById(`${idBtn}`);
    sound.play();
  }

  return (
    <div className="drum-pad" id={idCancion} onClick={reproducirSonido}>
      {idBtn} <audio src={src} id={idBtn}></audio>
    </div>
  );
}

DrumPad.propTypes = {
  src: PropTypes.string,
  idBtn: PropTypes.string,
  idCancion: PropTypes.string,
  src2: PropTypes.string,
};

export default DrumPad;
