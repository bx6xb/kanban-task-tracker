import { generateNumericId } from "./generateNumericId";

test("should return a 10 digit random number", () => {
  const randomNumber = generateNumericId();

  expect(randomNumber.toString().length).toEqual(10);
});
