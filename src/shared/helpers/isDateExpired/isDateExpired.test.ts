import { isDateExpired } from "./isDateExpired";

test("date should be expired", () => {
  const ms = new Date().getTime() - 60000;

  const result = isDateExpired(ms);

  expect(result).toBeTruthy();
});

test("date should not be expired", () => {
  const ms = new Date().getTime() + 60000;

  const result = isDateExpired(ms);

  expect(result).toBeFalsy();
});

test("if deadline is today it should also be expired", () => {
  const ms = new Date().getTime();

  const result = isDateExpired(ms);

  expect(result).toBeTruthy();
});
