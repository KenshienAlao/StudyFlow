import { useRef } from "react";

type Fn = (...args: any[]) => any;

export function usePersistFn<T extends Fn>(fn: T) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const stableRef = useRef<T | null>(null);

  if (!stableRef.current) {
    stableRef.current = ((...args: any[]) =>
      fnRef.current(...args)) as T;
  }

  return stableRef.current;
}