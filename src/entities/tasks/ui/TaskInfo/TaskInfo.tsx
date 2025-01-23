import s from "./TaskInfo.module.scss";
import clsx from "clsx";
import { removeTask } from "../../model";
import { TaskCardProps } from "../TaskCard";
import {
  formatDate,
  Icon,
  isDateExpired,
  useAppDispatch,
} from "../../../../shared";

type Props = { toggleEditMode(): void } & TaskCardProps;

export const TaskInfo = ({
  endDay,
  id,
  isEditable,
  startDay,
  text,
  toggleEditMode,
  type,
}: Props) => {
  const dispatch = useAppDispatch();

  const removeTaskCallback = () => dispatch(removeTask(id));

  return (
    <>
      <div className={"rowContainer"}>
        <div className={"row"}>
          Начало:
          <span>{formatDate(startDay)}</span>
        </div>

        <div className={"row"}>
          Окончание:
          <span
            className={clsx(
              isDateExpired(endDay) && type !== "done" && "expired"
            )}
          >
            {formatDate(endDay)}
          </span>
        </div>

        <div className={"row"}>
          Описание:
          <span className={s.text}>{text}</span>
        </div>
      </div>

      <div className={"options"}>
        {isEditable && (
          <button onClick={toggleEditMode} type={"button"}>
            <Icon className={s.edit} height={18} id={"edit"} width={18} />
          </button>
        )}

        <button onClick={removeTaskCallback} type={"button"}>
          <Icon className={s.trash} height={18} id={"trash"} width={18} />
        </button>
      </div>
    </>
  );
};
