import { z } from "zod";
import { DATE_REGEX } from "../../../shared";

const invalidDateMessage =
  "Неправильный формат даты или такой даты не существует";

export const taskFormSchema = z.object({
  endDay: z.string().regex(DATE_REGEX, invalidDateMessage),
  startDay: z.string().regex(DATE_REGEX, invalidDateMessage),
  text: z.string(),
});
