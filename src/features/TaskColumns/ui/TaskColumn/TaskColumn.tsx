import s from "./TaskColumn.module.scss";
import { addTask, TaskCard } from "../../../../entities";
import { ColumnData, Icon, useAppDispatch } from "../../../../shared";
import { Droppable } from "react-beautiful-dnd";
import clsx from "clsx";

type Props = ColumnData;

export const TaskColumn = ({ iconId, isAddable, tasks, title, id }: Props) => {
  const dispatch = useAppDispatch();

  const addTaskHandler = () => dispatch(addTask());

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
                onClick={addTaskHandler}
              >
                + Добавить
              </span>
            )}
          </div>

          <div className={s.tasks}>
            {tasks.length === 0 ? (
              <h3 className={s.nothingToShow}>Nothing to show</h3>
            ) : (
              tasks.map((task, index) => (
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
