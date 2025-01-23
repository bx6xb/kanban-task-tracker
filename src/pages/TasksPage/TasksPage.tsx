import { useEffect } from "react";
import s from "./TasksPage.module.scss";
import { formatDate, useAppDispatch, useAppSelector } from "../../shared";
import { loadTasks } from "../../entities";
import { Search, TaskColumn } from "../../features";

export const TasksPage = () => {
  const { searchTerm, tasks } = useAppSelector(state => state.tasksState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const filteredBySearchTermTasks = tasks.filter(task => {
    return (
      task.text.match(new RegExp(searchTerm, "gi")) ||
      formatDate(task.startDay).match(new RegExp(searchTerm, "g")) ||
      formatDate(task.endDay).match(new RegExp(searchTerm, "g"))
    );
  });

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
    <div className={s.tasksPage}>
      <div className={s.titleAndSearch}>
        <h1 className={s.header}>Your tasks</h1>
        <Search />
      </div>

      <div className={s.tasksColumns}>
        {tasksColumns.map(column => (
          <TaskColumn key={column.title} {...column} />
        ))}
      </div>
    </div>
  );
};
