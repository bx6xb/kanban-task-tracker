import s from "./TaskColumns.module.scss";
import {
  ColumnData,
  formatDate,
  isAnySearchTermMatch,
  useAppDispatch,
  useAppSelector,
} from "../../shared";
import { TaskColumn } from "./TaskColumn";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { editTask, TaskTypeValues } from "../../entities";

export const TaskColumns = () => {
  const { searchTerm, tasks } = useAppSelector(state => state.tasksState);

  const dispatch = useAppDispatch();

  const filteredBySearchTermTasks = tasks.filter(({ text, startDay, endDay }) =>
    isAnySearchTermMatch(
      [text, formatDate(startDay), formatDate(endDay)],
      searchTerm
    )
  );

  const tasksColumns: ColumnData[] = [
    {
      iconId: "happy",
      isAddable: true,
      tasks: filteredBySearchTermTasks.filter(task => task.type === "todo"),
      title: "To Do",
      id: "todo",
    },
    {
      iconId: "smile",
      tasks: filteredBySearchTermTasks.filter(
        task => task.type === "in_progress"
      ),
      title: "In Progress",
      id: "in_progress",
    },
    {
      iconId: "upside-down",
      tasks: filteredBySearchTermTasks.filter(task => task.type === "review"),
      title: "Review",
      id: "review",
    },
    {
      iconId: "ghost",
      tasks: filteredBySearchTermTasks.filter(task => task.type === "done"),
      title: "Done",
      id: "done",
    },
  ];

  const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
    if (!destination || destination.droppableId === source.droppableId) {
      return;
    }

    const column = tasksColumns.find(
      column => column.id === source.droppableId
    )!;
    const task = column.tasks.find((_, index) => index === source.index)!;

    dispatch(
      editTask({ ...task, type: destination.droppableId as TaskTypeValues })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.tasksColumns}>
        {tasksColumns.map(column => (
          <TaskColumn key={column.title} {...column} />
        ))}
      </div>
    </DragDropContext>
  );
};
