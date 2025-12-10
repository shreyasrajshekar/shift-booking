export const groupByDate = (shifts) => {
  const grouped = {};
  shifts.forEach(shift => {
    if (!grouped[shift.date]) grouped[shift.date] = [];
    grouped[shift.date].push(shift);
  });
  return grouped;
};
