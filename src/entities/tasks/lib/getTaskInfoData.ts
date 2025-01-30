import clsx from "clsx";
import { formatDate, isDateExpired } from "../../../shared";
import { TaskTypeValues } from "../model";
import { ComponentPropsWithoutRef } from "react";

type Params = {
  startDay: number;
  endDay: number;
  type: TaskTypeValues;
  text: string;
};

type Return = ({
  label: string;
} & ComponentPropsWithoutRef<"span">)[];

export const getTaskInfoData = ({
  startDay,
  endDay,
  type,
  text,
}: Params): Return => [
  {
    label: "Начало:",
    children: formatDate(startDay),
  },
  {
    label: "Окончание:",
    children: formatDate(endDay),
    className: clsx(isDateExpired(endDay) && type !== "done" && "expired"),
  },
  {
    label: "Описание:",
    children: text,
    className: "text",
  },
];
