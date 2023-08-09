import { createSlice } from "@reduxjs/toolkit";

const scoresInitalState = {
  currentScore: 9,
  maxScore: 0,

  gameActive: true,
  gameStatus: "playing",
};

const scoresSlice = createSlice({
  name: "scores",
  initialState: scoresInitalState,
  reducers: {
    setCurrentScore(state, action) {
      state.currentScore = action.payload;
    },
    setMaxScore(state, action) {
      state.maxScore = action.payload;
    },

    setGameOver(state, action) {
      state.gameActive = false;
    },
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
    },
    reset(state, action) {
      console.log("STORE RESET");
      return scoresInitalState;
    },
  },
});

export const scoresActions = scoresSlice.actions;

export default scoresSlice;
