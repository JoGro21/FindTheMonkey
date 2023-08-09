import { configureStore } from "@reduxjs/toolkit";

import scoresSlice from "./reducers/scores-slice";

const store = configureStore({
  reducer: {
    scores: scoresSlice.reducer,
  },
});

export default store;
