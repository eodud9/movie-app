import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 3000);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
