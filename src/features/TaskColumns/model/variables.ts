import { ColumnData } from "../../../shared";

export const tasksColumns: Omit<ColumnData, "tasks">[] = [
  {
    iconId: "happy",
    isAddable: true,
    title: "To Do",
    id: "todo",
  },
  {
    iconId: "smile",
    title: "In Progress",
    id: "in_progress",
  },
  {
    iconId: "upside-down",
    title: "Review",
    id: "review",
  },
  {
    iconId: "ghost",
    title: "Done",
    id: "done",
  },
];
