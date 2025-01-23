export const convertDateToMs = (date: string): number => {
  const [day, month, year] = date.split('.')
  const formatedDate = `${year}.${month}.${day}`
  const dateObject = new Date(formatedDate)

  if (isNaN(dateObject.getTime())) {
    return 0
  }

  return dateObject.getTime()
}
