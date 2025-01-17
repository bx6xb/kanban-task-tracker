import { TaskCard, TaskType } from '@/entities'
import { Icon } from '@/shared'

import s from './TaskColumn.module.scss'

type Props = {
  iconId: string
  isAddable?: boolean
  tasks: TaskType[]
  title: string
}

export const TaskColumn = ({ iconId, isAddable, tasks, title }: Props) => {
  const sortedTasks = tasks.sort((a, b) => a.startDay - b.startDay)

  return (
    <div className={s.taskColumn}>
      <div className={s.header}>
        <div className={s.title}>
          <Icon height={24} id={iconId} width={24} />
          {title}
        </div>

        {isAddable && <span className={s.add}>+ Добавить</span>}
      </div>

      <div className={s.tasks}>
        {sortedTasks.map(task => (
          <TaskCard isEditable={task.type === 'todo'} {...task} key={task.id} />
        ))}
      </div>
    </div>
  )
}
