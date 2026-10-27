'use client';

import { useEffect, useState } from 'react';
import { formatDuration, monthsBetween } from '@/lib/dates';

// The server renders these values into the HTML for crawlers; the browser recounts them
// after loading in case the cached page was built before a month or year changed.

// start is [year, monthIndex] rather than a timestamp, so time zones can't shift the month
export function Duration({ start, ongoing, initial }) {
  const [months, setMonths] = useState(initial);

  useEffect(() => {
    if (ongoing) setMonths(monthsBetween(new Date(start[0], start[1]), new Date()));
  }, [start, ongoing]);

  return formatDuration(months);
}

export function CurrentYear({ initial }) {
  const [year, setYear] = useState(initial);

  useEffect(() => setYear(new Date().getFullYear()), []);

  return year;
}
