export const formatDate = (date: string): string => {
  const _date = new Date(date);
  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const day = _date.getDate();

  return `${year}.${month}.${day}`;
};
