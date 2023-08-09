import cssStyle from "./ControlPanel.module.css";
import { useSelector } from "react-redux";

const ControlPanel = (props) => {
  const currentScore = useSelector((state) => {
    return state.scores.currentScore;
  });

  return (
    <div className={cssStyle.card}>
      <div className={cssStyle.scoreHolder}>
        <label className={cssStyle.scoreLabel}>Score: </label>
        <label className={cssStyle.scoreLabel}>{currentScore}</label>
      </div>
      <div className={cssStyle.buttonHolder}>
        <button className={cssStyle.button} onClick={props.onReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
