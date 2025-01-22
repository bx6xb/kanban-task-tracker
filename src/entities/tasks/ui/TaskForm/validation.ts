import { DATE_REGEX, INVALID_DATE_MESSAGE } from '@/shared'
import { z } from 'zod'

export const taskFormSchema = z.object({
  endDay: z.string().regex(DATE_REGEX, INVALID_DATE_MESSAGE),
  startDay: z.string().regex(DATE_REGEX, INVALID_DATE_MESSAGE),
  text: z.string(),
})
