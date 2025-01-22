export const isDateExpired = (date: number): boolean =>
  date < new Date().getTime();
