import { useState } from 'react'

import { Icon, convertToMilliseconds, formatDate, isDateExpired, useAppDispatch } from '@/shared'
import clsx from 'clsx'

import s from './TaskCard.module.scss'

import { TaskType, editTask, removeTask } from '../model'
import { CardInput } from './CardInput'

type Props = {
  isEditable?: boolean
} & TaskType

export const TaskCard = ({ endDay, id, isEditable, startDay, text, type }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [startDate, setStartDate] = useState(formatDate(startDay))
  const [endDate, setEndDate] = useState(formatDate(endDay))
  const [description, setDescription] = useState(text)

  const dispatch = useAppDispatch()

  const toggleEditMode = () => setIsEditMode(!isEditMode)
  const removeTaskCallback = () => dispatch(removeTask(id))
  const editTaskCallback = () => {
    dispatch(
      editTask({
        endDay: convertToMilliseconds(endDate),
        id,
        startDay: convertToMilliseconds(startDate),
        text: description,
      })
    )
    toggleEditMode()
  }

  const onStartDateChange = (value: string) => setStartDate(value)
  const onEndDateChange = (value: string) => setEndDate(value)
  const onTextChange = (value: string) => setDescription(value)

  return (
    <div className={s.taskCard}>
      <div className={s.infoContainer}>
        <div className={s.info}>
          Начало:
          {isEditMode ? (
            <CardInput onChange={onStartDateChange} value={startDate} />
          ) : (
            <span>{formatDate(startDay)}</span>
          )}
        </div>

        <div className={s.info}>
          Окончание:
          {isEditMode ? (
            <CardInput onChange={onEndDateChange} value={endDate} />
          ) : (
            <span className={clsx(isDateExpired(endDay) && type !== 'done' && s.expired)}>
              {formatDate(endDay)}
            </span>
          )}
        </div>

        <div className={s.info}>
          Описание:
          {isEditMode ? (
            <CardInput onChange={onTextChange} value={description} />
          ) : (
            <span className={s.text}>{text}</span>
          )}
        </div>
      </div>

      {!isEditMode && (
        <div className={s.options}>
          {isEditable && (
            <button onClick={toggleEditMode} type={'button'}>
              <Icon className={s.edit} height={18} id={'edit'} width={18} />
            </button>
          )}

          <button onClick={removeTaskCallback} type={'button'}>
            <Icon className={s.trash} height={18} id={'trash'} width={18} />
          </button>
        </div>
      )}

      {isEditMode && (
        <div className={s.editButtons}>
          <button onClick={toggleEditMode} type={'button'}>
            <Icon className={s.cross} height={24} id={'cross'} width={24} />
          </button>

          <button onClick={editTaskCallback} type={'button'}>
            <Icon className={s.check} height={24} id={'check'} width={24} />
          </button>
        </div>
      )}
    </div>
  )
}
