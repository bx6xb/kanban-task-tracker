export const convertDateToMs = (date: string): number => {
  const [day, month, year] = date.split(".");
  const formattedDate = `${year}.${month}.${day}`;
  const dateObject = new Date(formattedDate);

  if (isNaN(dateObject.getTime())) {
    return 0;
  }

  return dateObject.getTime();
};
