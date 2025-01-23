import { z } from "zod";
import { DATE_REGEX } from "../../../shared";

const INVALID_DATE_MESSAGE =
  "Неправильный формат даты или такой даты не существует";

export const taskFormSchema = z.object({
  endDay: z.string().regex(DATE_REGEX, INVALID_DATE_MESSAGE),
  startDay: z.string().regex(DATE_REGEX, INVALID_DATE_MESSAGE),
  text: z.string(),
});
