import { isDateExpired } from "./isDateExpired";

test("date should be expired", () => {
  const ms = new Date().getTime() - 60000;
  const condition = isDateExpired(ms);

  expect(condition).toBeTruthy();
});

test("date should not be expired", () => {
  const ms = new Date().getTime() + 60000;
  const condition = isDateExpired(ms);

  expect(condition).toBeFalsy();
});

test("if deadline is today it should also be expired", () => {
  const ms = new Date().getTime();
  const condition = isDateExpired(ms);

  expect(condition).toBeTruthy();
});
