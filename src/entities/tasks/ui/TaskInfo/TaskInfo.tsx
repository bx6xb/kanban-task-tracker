import { Icon, formatDate, isDateExpired, useAppDispatch } from '@/shared'
import clsx from 'clsx'

import s from './TaskInfo.module.scss'

import { removeTask } from '../../model'
import { TaskCardProps } from '../TaskCard'

type Props = { toggleEditMode(): void } & TaskCardProps

export const TaskInfo = ({
  endDay,
  id,
  isEditable,
  startDay,
  text,
  toggleEditMode,
  type,
}: Props) => {
  const dispatch = useAppDispatch()

  const removeTaskCallback = () => dispatch(removeTask(id))

  return (
    <>
      <div className={s.rowContainer}>
        <div className={s.row}>
          Начало:
          <span>{formatDate(startDay)}</span>
        </div>

        <div className={s.row}>
          Окончание:
          <span className={clsx(isDateExpired(endDay) && type !== 'done' && s.expired)}>
            {formatDate(endDay)}
          </span>
        </div>

        <div className={s.row}>
          Описание:
          <span className={s.text}>{text}</span>
        </div>
      </div>

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
    </>
  )
}
