import s from "./TasksPage.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../../shared";
import { loadTasks } from "../../../entities";
import { Search, TaskColumns } from "../../../features";

export const TasksPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className={s.tasksPage}>
      <div className={s.titleAndSearch}>
        <h1 className={s.header}>Your tasks</h1>
        <Search />
      </div>

      <TaskColumns />
    </div>
  );
};
