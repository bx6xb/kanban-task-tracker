import { convertDateToMs } from "./convertDateToMs";

test("date should be correctly converted to ms", () => {
  const date = "23.12.2025";
  const ms = convertDateToMs(date);

  expect(ms).toEqual(new Date("12.23.2025").getTime());
});

test("the function should return 0 because the date is invalid", () => {
  const date = "23.13.2025";
  const ms = convertDateToMs(date);

  expect(ms).toEqual(0);
});
