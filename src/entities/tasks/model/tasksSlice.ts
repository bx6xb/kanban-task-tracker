import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";
import tasksData from "./tasks.json";
import { TaskType, TasksState } from "./types";

const initialState: TasksState = { searchTerm: "", tasks: [] };

export const tasksSlice = createSlice({
  initialState,
  name: "tasksState",
  reducers: {
    editTask(state, action: PayloadAction<TaskType>) {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload.id
          ? {
              ...action.payload,
              id: task.id || state.tasks.length + 1,
            }
          : task
      );

      api.saveTasks(state.tasks);
    },
    loadTasks(state) {
      const tasks = api.loadTasks();

      if (tasks.length === 0) {
        state.tasks = tasksData as TaskType[];
      } else {
        state.tasks = tasks;
      }
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      api.saveTasks(state.tasks);
    },
    saveTasks(state) {
      api.saveTasks(state.tasks);
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addTask(state) {
      state.tasks.push({
        id: 0,
        type: "todo",
        startDay: new Date().getTime(),
        endDay: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
        text: "~Ваше описание~",
      });
    },
  },
});

export const {
  editTask,
  loadTasks,
  removeTask,
  saveTasks,
  setSearchTerm,
  addTask,
} = tasksSlice.actions;
