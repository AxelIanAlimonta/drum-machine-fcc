import "../css/ToggleSwitch.css";
import PropTypes from "prop-types";

const ToggleSwitch = ({ onClick }) => {
  return (
    <label className="switchBtn" >
      <input type="checkbox" />
      <div className="slide round" onClick={onClick}>
        <span id="txtPwrBtn">Power</span>
      </div>
    </label>
  );
};
ToggleSwitch.propTypes = {
  onClick: PropTypes.func,
};
export default ToggleSwitch;
