import { TaskFormValues } from "../model";

const datePlaceholder = "дд.мм.гггг";

export const getInputData = (
  startDayError?: string,
  endDayError?: string
): {
  label: string;
  name: keyof TaskFormValues;
  errorMessage?: string;
  placeholder: string;
}[] => [
  {
    label: "Начало:",
    name: "startDay",
    errorMessage: startDayError,
    placeholder: datePlaceholder,
  },
  {
    label: "Окончание:",
    name: "endDay",
    errorMessage: endDayError,
    placeholder: datePlaceholder,
  },
  {
    label: "Описание:",
    name: "text",
    placeholder: "Описание задачи",
  },
];
