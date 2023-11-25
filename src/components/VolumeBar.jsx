import PropTypes from "prop-types";
import "../css/volumeBar.css";

function VolumeBar({ onInput }) {
  return (
    <div className="volumeContainer">
      <p className="volume-p">Volume</p>
      <input type="range" min={0} max={1} step={0.01} onInput={onInput} className="volume-bar"/>
    </div>
  );
}

VolumeBar.propTypes = {
  onInput: PropTypes.func,
};

export default VolumeBar;
