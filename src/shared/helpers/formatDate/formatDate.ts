export const formatDate = (ms: number): string => {
  const date = new Date(ms);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};
