import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import s from "./TaskForm.module.scss";
import { editTask } from "../../model";
import { taskFormSchema } from "./validation";
import { convertDateToMs, Icon, useAppDispatch } from "../../../../shared";

type FormValues = {
  endDay: string;
  startDay: string;
  text: string;
};

type Props = {
  id: number;
  onCrossClick(): void;
  onSubmit(): void;
} & FormValues;

export const TaskForm = ({
  endDay,
  id,
  onCrossClick,
  onSubmit,
  startDay,
  text,
}: Props) => {
  const dispatch = useAppDispatch();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      endDay,
      startDay,
      text,
    },
    resolver: zodResolver(taskFormSchema),
  });

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
      })
    );

    onSubmit();
  };

  const startDayError = errors.startDay?.message;
  const endDayError = errors.endDay?.message;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={"rowContainer"}>
        <label className={"row"}>
          Начало:
          <input
            {...register("startDay")}
            className={clsx(s.input, startDayError && s.error)}
          />
        </label>
        {!!startDayError && (
          <span className={s.errorMessage}>{startDayError}</span>
        )}

        <label className={"row"}>
          Окончание:
          <input
            {...register("endDay")}
            className={clsx(s.input, endDayError && s.error)}
          />
        </label>
        {!!endDayError && <span className={s.errorMessage}>{endDayError}</span>}

        <label className={"row"}>
          Описание:
          <input {...register("text")} className={s.input} />
        </label>
      </div>

      <div className={s.editButtons}>
        <button onClick={onCrossClick} type={"button"}>
          <Icon className={s.cross} height={24} id={"cross"} width={24} />
        </button>

        <button type={"submit"}>
          <Icon className={s.check} height={24} id={"check"} width={24} />
        </button>
      </div>
    </form>
  );
};
