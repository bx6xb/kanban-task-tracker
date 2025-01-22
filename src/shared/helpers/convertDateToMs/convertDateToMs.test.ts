import { convertDateToMs } from './convertDateToMs'

test('date should be correctly converted to ms', () => {
  const date = '12.12.2025'
  const ms = convertDateToMs(date)

  expect(ms).toEqual(1765479600000)
})

test('the function should return 0 because the date is invalid', () => {
  const date = '12.13.2025'
  const ms = convertDateToMs(date)

  expect(ms).toEqual(0)
})
