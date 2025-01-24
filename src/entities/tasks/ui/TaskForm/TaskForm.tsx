import s from "./TaskForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { editTask, TaskType, taskFormSchema, removeTask } from "../../model";
import {
  convertDateToMs,
  formatDate,
  Icon,
  Input,
  useAppDispatch,
} from "../../../../shared";

type FormValues = {
  endDay: string;
  startDay: string;
  text: string;
};

type Props = {
  onCrossClick(): void;
  onSubmit(): void;
} & TaskType;

export const TaskForm = ({
  endDay,
  id,
  onCrossClick,
  onSubmit,
  startDay,
  text,
  type,
}: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      endDay: formatDate(endDay),
      startDay: formatDate(startDay),
      text,
    },
    resolver: zodResolver(taskFormSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmitHandler: SubmitHandler<FormValues> = ({
    endDay,
    startDay,
    text,
  }) => {
    dispatch(
      editTask({
        endDay: convertDateToMs(endDay),
        id,
        startDay: convertDateToMs(startDay),
        text,
        type,
      })
    );

    onSubmit();
  };

  const removeTaskCallback = () => {
    dispatch(removeTask(id));
  };

  const startDayError = errors.startDay?.message;
  const endDayError = errors.endDay?.message;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={"rowContainer"}>
        <label className={"row"}>
          Начало:
          <Input
            {...register("startDay")}
            className={clsx(s.input, startDayError && s.error)}
          />
        </label>
        {!!startDayError && (
          <span className={s.errorMessage}>{startDayError}</span>
        )}

        <label className={"row"}>
          Окончание:
          <Input
            {...register("endDay")}
            className={clsx(s.input, endDayError && s.error)}
          />
        </label>
        {!!endDayError && <span className={s.errorMessage}>{endDayError}</span>}

        <label className={"row"}>
          Описание:
          <Input {...register("text")} className={s.input} />
        </label>
      </div>

      <div className={s.editButtons}>
        <button
          onClick={id === 0 ? removeTaskCallback : onCrossClick}
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
