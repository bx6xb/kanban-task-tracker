import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../entities";

export const store = configureStore({
  reducer: {
    [tasksSlice.name]: tasksSlice.reducer,
  },
});
