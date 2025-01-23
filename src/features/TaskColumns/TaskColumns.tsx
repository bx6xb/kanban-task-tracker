import s from "./TaskColumns.module.scss";
import { formatDate, isAnySearchTermMatch, useAppSelector } from "../../shared";
import { TaskColumn } from "./TaskColumn";

export const TaskColumns = () => {
  const { searchTerm, tasks } = useAppSelector(state => state.tasksState);

  const filteredBySearchTermTasks = tasks.filter(({ text, startDay, endDay }) =>
    isAnySearchTermMatch(
      [text, formatDate(startDay), formatDate(endDay)],
      searchTerm
    )
  );

  const tasksColumns = [
    {
      iconId: "happy",
      isAddable: true,
      tasks: filteredBySearchTermTasks.filter(task => task.type === "todo"),
      title: "To Do",
    },
    {
      iconId: "smile",
      tasks: filteredBySearchTermTasks.filter(
        task => task.type === "in_progress"
      ),
      title: "In Progress",
    },
    {
      iconId: "upside-down",
      tasks: filteredBySearchTermTasks.filter(task => task.type === "review"),
      title: "Review",
    },
    {
      iconId: "ghost",
      tasks: filteredBySearchTermTasks.filter(task => task.type === "done"),
      title: "Done",
    },
  ];

  return (
    <div className={s.tasksColumns}>
      {tasksColumns.map(column => (
        <TaskColumn key={column.title} {...column} />
      ))}
    </div>
  );
};
