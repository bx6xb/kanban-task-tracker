import s from "./TaskColumn.module.scss";
import { addTask, TaskCard } from "../../../entities";
import { ColumnData, Icon, useAppDispatch } from "../../../shared";
import { Droppable } from "react-beautiful-dnd";
import clsx from "clsx";

type Props = ColumnData;

export const TaskColumn = ({ iconId, isAddable, tasks, title, id }: Props) => {
  const dispatch = useAppDispatch();

  const addTaskCallback = () => dispatch(addTask());

  const sortedTasks = tasks.sort((a, b) => {
    if (a.id === 0 || b.id === 0) {
      return -1;
    }

    return a.startDay - b.startDay;
  });

  const isNewTaskExist = tasks.some(task => task.id === 0);

  return (
    <Droppable droppableId={id}>
      {({ droppableProps, innerRef, placeholder }) => (
        <div className={s.taskColumn} {...droppableProps} ref={innerRef}>
          <div className={s.header}>
            <div className={s.title}>
              <Icon className={s.icon} id={iconId} />
              {title}
            </div>

            {isAddable && (
              <span
                className={clsx(s.add, isNewTaskExist && s.disabled)}
                onClick={addTaskCallback}
              >
                + Добавить
              </span>
            )}
          </div>

          <div className={s.tasks}>
            {sortedTasks.length === 0 ? (
              <h3 className={s.nothingToShow}>Nothing to show</h3>
            ) : (
              sortedTasks.map((task, index) => (
                <TaskCard
                  index={index}
                  isEditable={task.type === "todo"}
                  key={task.id}
                  {...task}
                />
              ))
            )}
          </div>

          {placeholder}
        </div>
      )}
    </Droppable>
  );
};
