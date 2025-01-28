import { TaskType } from "../model";
import tasksData from "./tasks.json";

const localStorageKey = "tasks";

export const api = {
  loadTasks: (): TaskType[] => {
    const data = localStorage.getItem(localStorageKey);
    return data ? JSON.parse(data) : (tasksData as TaskType[]);
  },
  saveTasks: (tasks: TaskType[]): void =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks)),
};
