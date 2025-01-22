import { useState } from 'react'

import { formatDate } from '@/shared'

import s from './TaskCard.module.scss'

import { TaskType } from '../model'
import { TaskForm } from './TaskForm'
import { TaskInfo } from './TaskInfo'

export type TaskCardProps = {
  isEditable?: boolean
} & TaskType

export const TaskCard = ({ endDay, id, isEditable, startDay, text, type }: TaskCardProps) => {
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleEditMode = () => setIsEditMode(!isEditMode)

  const onSubmit = () => toggleEditMode()

  return (
    <div className={s.taskCard}>
      {isEditMode ? (
        <TaskForm
          endDay={formatDate(endDay)}
          id={id}
          onCrossClick={() => setIsEditMode(false)}
          onSubmit={onSubmit}
          startDay={formatDate(startDay)}
          text={text}
        />
      ) : (
        <TaskInfo
          endDay={endDay}
          id={id}
          isEditable={isEditable}
          startDay={startDay}
          text={text}
          toggleEditMode={toggleEditMode}
          type={type}
        />
      )}
    </div>
  )
}
