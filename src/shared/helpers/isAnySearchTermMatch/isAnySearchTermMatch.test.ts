import { isAnySearchTermMatch } from "./isAnySearchTermMatch";

const values = [
  "15.11.2023",
  "20.11.2023",
  "Обновить базу знаний компании до конца года.",
];

test("should match by start day", () => {
  const searchTerm = "15.11.2023";

  const result = isAnySearchTermMatch(values, searchTerm);

  expect(result).toBeTruthy();
});

test("should match by end day", () => {
  const searchTerm = "20.11.2023";

  const result = isAnySearchTermMatch(values, searchTerm);

  expect(result).toBeTruthy();
});

test("should match by text ignore casing", () => {
  const searchTerm = "обновить";

  const result = isAnySearchTermMatch(values, searchTerm);

  expect(result).toBeTruthy();
});

test("should not find any match", () => {
  const searchTerm = "оптимизировать";

  const result = isAnySearchTermMatch(values, searchTerm);

  expect(result).toBeFalsy();
});
