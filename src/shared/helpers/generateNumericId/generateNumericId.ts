import { customAlphabet } from "nanoid";

export const generateNumericId = (): number =>
  +customAlphabet("0123456789", 10)();
