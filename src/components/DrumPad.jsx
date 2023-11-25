import PropTypes from "prop-types";
import "../css/drumPad.css";

function DrumPad({ src, idBtn, idCancion, onClick }) {
  return (
    <div className="drum-pad" id={idCancion} onClick={() => onClick(idBtn,idCancion)}>
      {idBtn} <audio src={src} id={idBtn}></audio>
    </div>
  );
}

DrumPad.propTypes = {
  src: PropTypes.string,
  idBtn: PropTypes.string,
  idCancion: PropTypes.string,
  onClick: PropTypes.func,
};

export default DrumPad;
