'use client';

import { useEffect, useState } from 'react';

// Bali uses WITA (Asia/Makassar, UTC+8)
const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Makassar',
  hour: '2-digit',
  minute: '2-digit'
});

export function BaliClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return <span>{time ? `${time} (UTC+8)` : 'UTC+8'}</span>;
}
