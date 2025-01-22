import { isDateExpired } from './isDateExpired'

test('date should be expired', () => {
  const ms = 1702321200000
  const condition = isDateExpired(ms)

  expect(condition).toBeTruthy()
})

test('date should not be expired', () => {
  const ms = 2554398000000
  const condition = isDateExpired(ms)

  expect(condition).toBeFalsy()
})
