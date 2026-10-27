export const formatMonth = (date) => date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

export const formatRange = (start, end) => `${formatMonth(start)} — ${end ? formatMonth(end) : 'Present'}`;

// Inclusive month count, e.g. Nov 2025 - Nov 2025 = 1 mo
export const monthsBetween = (start, end) =>
  (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

// e.g. 7 mos, 1 yr, 2 yrs 10 mos
export const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years > 1 ? 'yrs' : 'yr'}`);
  if (rest || !years) parts.push(`${rest} ${rest === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
};

// Call while rendering, not at module scope, so a revalidated page counts from the current date
export const withDuration = (item) => ({
  ...item,
  date: formatRange(item.start, item.end),
  month: monthsBetween(item.start, item.end ?? new Date())
});
