"use client";

import { useEffect, useState } from "react";

// Mengembalikan nilai setelah user berhenti mengubahnya selama `delay` ms.
// Berguna untuk search input agar tidak memfilter di setiap ketikan.

export default function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounced;
}
