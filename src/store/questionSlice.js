import {
  createSlice,
  // current
} from "@reduxjs/toolkit";

import { questions } from "../constant/data";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: questions,
  reducers: {
    questionAdded(state, action) {
      state.push(action.payload);
    },
    questionUpdate(state, action) {
      const id = action.payload.id;

      const index = state.findIndex((question) => {
        return question.id === id;
      });

      state[index] = action.payload;

      // console.log(current(state));
    },
    questionDelete(state, action) {
      const { id } = action.payload;
      return state.filter((question) => question.id !== id);
    },
  },
});

export const { questionAdded, questionUpdate, questionDelete } =
  questionsSlice.actions;

export default questionsSlice.reducer;
