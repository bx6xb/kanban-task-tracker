import s from "./TaskColumn.module.scss";
import { TaskCard } from "../../../entities";
import { ColumnData, Icon } from "../../../shared";
import { Droppable } from "react-beautiful-dnd";

type Props = ColumnData;

export const TaskColumn = ({ iconId, isAddable, tasks, title, id }: Props) => {
  const sortedTasks = tasks.sort((a, b) => a.startDay - b.startDay);

  return (
    <Droppable droppableId={id}>
      {({ droppableProps, innerRef, placeholder }) => (
        <div className={s.taskColumn} {...droppableProps} ref={innerRef}>
          <div className={s.header}>
            <div className={s.title}>
              <Icon className={s.icon} id={iconId} />
              {title}
            </div>

            {isAddable && <span className={s.add}>+ Добавить</span>}
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
