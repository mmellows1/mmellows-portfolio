export const formatStartAndEndDate = (
  startDate: Date | string,
  endDate?: Date | string
): string => {
  const formatMonthYear = (date: Date | string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

  const start = formatMonthYear(startDate);

  if (!endDate) {
    return `${start} - Present`;
  }

  const end = formatMonthYear(endDate);
  return `${start} - ${end}`;
};
