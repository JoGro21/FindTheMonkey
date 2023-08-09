import { scoresActions } from "../reducers/scores-slice";

import { useSelector } from "react-redux/es/hooks/useSelector";

export const updateScoreAndTry = (currentScore, hasMonkey) => {
  return async (dispatch) => {
    const updatedCurrentScore = currentScore - 1;
    dispatch(scoresActions.setCurrentScore(updatedCurrentScore));

    if (updatedCurrentScore === 0) {
      dispatch(scoresActions.setGameOver());
    }

    if (hasMonkey) {
      dispatch(scoresActions.setGameStatus("won"));
      dispatch(scoresActions.setGameOver());
    }

    if (updatedCurrentScore === 0 && !hasMonkey) {
      dispatch(scoresActions.setGameStatus("lost"));
    }
  };
};

export const resetGameStore = () => {
  console.log("DISPATCHING RESET");
  return async (dispatch) => {
    dispatch(scoresActions.reset());
  };
};
