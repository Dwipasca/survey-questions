import { createSlice } from "@reduxjs/toolkit";

import { questions } from "../constant/data";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: questions,
  reducers: {
    questionAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { questionAdded } = questionsSlice.actions;

export default questionsSlice.reducer;
