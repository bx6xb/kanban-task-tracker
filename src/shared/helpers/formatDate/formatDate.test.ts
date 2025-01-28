import { formatDate } from "./formatDate";

test("date should be formatted correctly", () => {
  const ms = new Date("1.23.2025").getTime();

  const formattedDate = formatDate(ms);

  expect(formattedDate).toEqual("23.1.2025");
});
