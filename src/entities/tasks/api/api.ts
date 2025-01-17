import { TaskType } from '../model'

export const api = {
  loadTasks: (): TaskType[] => JSON.parse(localStorage.getItem('tasks') || '[]'),
  saveTasks: (tasks: TaskType[]): void => localStorage.setItem('tasks', JSON.stringify(tasks)),
}
