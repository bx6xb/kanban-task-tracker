export type TasksState = {
  searchTerm: string;
  tasks: TaskType[];
};

export type TaskTypeValues = "done" | "in_progress" | "review" | "todo";

export type TaskType = {
  endDay: number;
  id: number;
  startDay: number;
  text: string;
  type: TaskTypeValues;
};

export type TaskFormValues = {
  endDay: string;
  startDay: string;
  text: string;
};
