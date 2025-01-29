import s from "./TaskForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { TaskFormValues, TaskType, taskFormSchema } from "../../model";
import { formatDate, Icon, Input } from "../../../../shared";
import { getInputData } from "../../lib";

type Props = {
  onCrossClick(): void;
  onSubmit(data: TaskFormValues): void;
  removeTask(id: number): void;
} & TaskType;

export const TaskForm = ({
  endDay,
  id,
  startDay,
  text,
  removeTask,
  onCrossClick,
  onSubmit,
}: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TaskFormValues>({
    defaultValues: {
      endDay: formatDate(endDay),
      startDay: formatDate(startDay),
      text,
    },
    resolver: zodResolver(taskFormSchema),
  });

  const removeTaskHandler = () => removeTask(id);

  const startDayError = errors.startDay?.message;
  const endDayError = errors.endDay?.message;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={"rowContainer"}>
        {getInputData(startDayError, endDayError).map(
          ({ errorMessage, label, name, placeholder }) => (
            <Input
              key={name}
              {...register(name as keyof TaskFormValues)}
              label={label}
              errorMessage={errorMessage}
              labelClassName={"row"}
              className={clsx(s.input, errorMessage && s.error)}
              placeholder={placeholder}
            />
          )
        )}
      </div>

      <div className={s.editButtons}>
        <button
          onClick={id === 0 ? removeTaskHandler : onCrossClick}
          type={"button"}
        >
          <Icon className={s.cross} height={24} id={"cross"} width={24} />
        </button>

        <button type={"submit"}>
          <Icon className={s.check} height={24} id={"check"} width={24} />
        </button>
      </div>
    </form>
  );
};
