import { tasksSlice } from '@/entities'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [tasksSlice.name]: tasksSlice.reducer,
  },
})
