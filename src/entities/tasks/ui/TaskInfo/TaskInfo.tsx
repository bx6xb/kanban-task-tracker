import s from "./TaskInfo.module.scss";
import { TaskType } from "../../model";
import { Icon } from "../../../../shared";
import { getTaskInfoData } from "../../lib";

type Props = {
  isEditable?: boolean;
  toggleEditMode(): void;
  removeTask(id: number): void;
} & TaskType;

export const TaskInfo = ({
  endDay,
  id,
  startDay,
  text,
  type,
  isEditable,
  toggleEditMode,
  removeTask,
}: Props) => {
  const removeTaskHandler = () => removeTask(id);

  return (
    <>
      <div className={"rowContainer"}>
        {getTaskInfoData({ startDay, endDay, type, text }).map(
          ({ label, children, className }) => (
            <div className={"row"} key={label}>
              {label}
              <span className={className}>{children}</span>
            </div>
          )
        )}
      </div>

      <div className={"options"}>
        {isEditable && (
          <button onClick={toggleEditMode} type={"button"}>
            <Icon className={s.edit} height={18} id={"edit"} width={18} />
          </button>
        )}

        <button onClick={removeTaskHandler} type={"button"}>
          <Icon className={s.trash} height={18} id={"trash"} width={18} />
        </button>
      </div>
    </>
  );
};
