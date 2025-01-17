export const convertToMilliseconds = (date: string): number => {
  const [day, month, year] = date.split('.')
  const rormatedDate = `${year}.${month}.${day}`
  const dateObject = new Date(rormatedDate)

  if (isNaN(dateObject.getTime())) {
    return 0
  }

  return dateObject.getTime()
}
