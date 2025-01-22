export type TasksState = {
  searchTerm: string;
  tasks: TaskType[];
};

export type TaskTypes = "done" | "in_progress" | "review" | "todo";

export type TaskType = {
  endDay: number;
  id: number;
  startDay: number;
  text: string;
  type: TaskTypes;
};
