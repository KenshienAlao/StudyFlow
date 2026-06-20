import { useRef } from "react";

type Options<T> = {
  onKeyDown?: React.KeyboardEventHandler<T>;
  onCompositionStart?: React.CompositionEventHandler<T>;
  onCompositionEnd?: React.CompositionEventHandler<T>;
};

export function useComposition<T extends HTMLElement = HTMLInputElement>(
  options: Options<T> = {}
) {
  const composing = useRef(false);

  const onCompositionStart = (e: React.CompositionEvent<T>) => {
    composing.current = true;
    options.onCompositionStart?.(e);
  };

  const onCompositionEnd = (e: React.CompositionEvent<T>) => {
    composing.current = false;
    options.onCompositionEnd?.(e);
  };

  const onKeyDown = (e: React.KeyboardEvent<T>) => {
    if (composing.current && e.key === "Enter") return;
    options.onKeyDown?.(e);
  };

  return {
    isComposing: () => composing.current,
    onCompositionStart,
    onCompositionEnd,
    onKeyDown,
  };
}