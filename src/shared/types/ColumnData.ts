import { TaskType, TaskTypeValues } from "../../entities";

export type ColumnData = {
  iconId: string;
  isAddable?: boolean;
  tasks: TaskType[];
  title: string;
  id: TaskTypeValues;
};
