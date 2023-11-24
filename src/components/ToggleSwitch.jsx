import "../css/ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <label className="switchBtn">
      <input type="checkbox" />
      <div className="slide round"><span id="txtPwrBtn">Power</span></div>
    </label>
  );
};

export default ToggleSwitch;
