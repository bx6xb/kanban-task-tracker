import { formatDate } from './formatDate'

test('date should be formatted correctly', () => {
  const ms = 1765479600000
  const date = formatDate(ms)

  expect(date).toEqual('12.12.2025')
})
