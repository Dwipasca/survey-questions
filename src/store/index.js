import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionSlice";
export default configureStore({
  reducer: {
    questions: questionsReducer,
  },
});
