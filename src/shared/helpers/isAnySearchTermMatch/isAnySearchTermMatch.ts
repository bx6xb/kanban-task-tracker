export const isAnySearchTermMatch = (
  values: string[],
  searchTerm: string
): boolean => values.some(string => string.match(new RegExp(searchTerm, "gi")));
