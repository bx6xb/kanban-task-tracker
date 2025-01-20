import { useEffect } from 'react'

import { loadTasks } from '@/entities'
import { Search, TaskColumn } from '@/feature'
import { useAppDispatch, useAppSelector } from '@/shared'

import s from './TasksPage.module.scss'

export const TasksPage = () => {
  const tasks = useAppSelector(state => state.tasksState.tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadTasks())
  }, [dispatch])

  const tasksColumns = [
    {
      iconId: 'happy',
      isAddable: true,
      tasks: tasks.filter(task => task.type === 'todo'),
      title: 'To Do',
    },
    {
      iconId: 'smile',
      tasks: tasks.filter(task => task.type === 'in_progress'),
      title: 'In Progress',
    },
    {
      iconId: 'upside-down',
      tasks: tasks.filter(task => task.type === 'review'),
      title: 'Review',
    },
    {
      iconId: 'ghost',
      tasks: tasks.filter(task => task.type === 'done'),
      title: 'Done',
    },
  ]

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
  )
}
