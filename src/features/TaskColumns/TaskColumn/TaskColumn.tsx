import s from "./TaskColumn.module.scss";
import { TaskCard, TaskType } from "../../../entities";
import { Icon } from "../../../shared";

type Props = {
  iconId: string;
  isAddable?: boolean;
  tasks: TaskType[];
  title: string;
};

export const TaskColumn = ({ iconId, isAddable, tasks, title }: Props) => {
  const sortedTasks = tasks.sort((a, b) => a.startDay - b.startDay);

  return (
    <div className={s.taskColumn}>
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
          sortedTasks.map(task => (
            <TaskCard
              isEditable={task.type === "todo"}
              key={task.id}
              {...task}
            />
          ))
        )}
      </div>
    </div>
  );
};
