import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";
import { TaskType, TasksState } from "./types";
import { generateNumericId } from "../../../shared";

const initialState: TasksState = { searchTerm: "", tasks: [] };

export const tasksSlice = createSlice({
  initialState,
  name: "tasksState",
  reducers: {
    setSearchTerm(state, action: PayloadAction<{ searchTerm: string }>) {
      state.searchTerm = action.payload.searchTerm;
    },
    loadTasks(state) {
      state.tasks = api.loadTasks();
    },
    addTask(state) {
      state.tasks.push({
        id: 0,
        type: "todo",
        startDay: new Date().getTime(),
        endDay: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
        text: "",
      });
    },
    editTask(state, action: PayloadAction<{ task: TaskType }>) {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload.task.id
          ? {
              ...action.payload.task,
              id: task.id || generateNumericId(),
            }
          : task
      );

      api.saveTasks(state.tasks);
    },
    removeTask(state, action: PayloadAction<{ id: number }>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);

      api.saveTasks(state.tasks);
    },
  },
});

export const { setSearchTerm, loadTasks, addTask, editTask, removeTask } =
  tasksSlice.actions;
