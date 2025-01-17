import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { api } from '../api'
import tasksData from './tasks.json'
import { TaskType, TasksState } from './types'

const initialState: TasksState = { tasks: tasksData as TaskType[] }

export const tasksSlice = createSlice({
  initialState,
  name: 'tasksState',
  reducers: {
    editTask(state, action: PayloadAction<Omit<TaskType, 'type'>>) {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      )
    },
    loadTasks(state) {
      state.tasks = api.loadTasks()
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    saveTasks(state) {
      api.saveTasks(state.tasks)
    },
  },
})

export const { editTask, loadTasks, removeTask, saveTasks } = tasksSlice.actions
