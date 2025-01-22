import { z } from "zod";
import { DATE_REGEX, INVALID_DATE_MESSAGE } from "../../../../shared";

export const taskFormSchema = z.object({
  endDay: z.string().regex(DATE_REGEX, INVALID_DATE_MESSAGE),
  startDay: z.string().regex(DATE_REGEX, INVALID_DATE_MESSAGE),
  text: z.string(),
});
