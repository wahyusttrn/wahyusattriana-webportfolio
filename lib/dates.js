export const formatMonth = (date) => date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

export const formatRange = (start, end) => `${formatMonth(start)} — ${end ? formatMonth(end) : 'Present'}`;

// Inclusive month count, e.g. Nov 2025 - Nov 2025 = 1 mo
export const monthsBetween = (start, end) =>
  (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

// Call while rendering, not at module scope, so a revalidated page counts from the current date
export const withDuration = (item) => ({
  ...item,
  date: formatRange(item.start, item.end),
  month: monthsBetween(item.start, item.end ?? new Date())
});
