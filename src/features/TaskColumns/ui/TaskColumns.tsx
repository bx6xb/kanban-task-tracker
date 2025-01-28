import s from "./TaskColumns.module.scss";
import {
  formatDate,
  isAnySearchTermMatch,
  useAppDispatch,
  useAppSelector,
} from "../../../shared";
import { TaskColumn } from "./TaskColumn";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { editTask, TaskTypeValues } from "../../../entities";
import { tasksColumns } from "../model";

export const TaskColumns = () => {
  const { searchTerm, tasks } = useAppSelector(state => state.tasksState);

  const dispatch = useAppDispatch();

  const filteredAndSortedTasks = tasks
    .filter(({ text, startDay, endDay }) =>
      isAnySearchTermMatch(
        [text, formatDate(startDay), formatDate(endDay)],
        searchTerm
      )
    )
    .sort((a, b) => {
      if (a.id === 0 || b.id === 0) {
        return -1;
      }

      return a.startDay - b.startDay;
    });

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination || destination.droppableId === source.droppableId) {
      return;
    }

    const column = tasksColumns.find(
      column => column.id === source.droppableId
    )!;
    const task = filteredAndSortedTasks
      .filter(task => task.type === column.id)
      .find((_, index) => index === source.index)!;

    dispatch(
      editTask({
        task: {
          ...task,
          type: destination.droppableId as TaskTypeValues,
        },
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.tasksColumns}>
        {tasksColumns.map(column => (
          <TaskColumn
            key={column.title}
            tasks={filteredAndSortedTasks.filter(
              task => task.type === column.id
            )}
            {...column}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
