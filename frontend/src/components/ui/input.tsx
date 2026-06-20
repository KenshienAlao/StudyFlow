import { useComposition } from "@/hooks";
import { cn } from "@/lib/utils";
import * as React from "react";

function Input({
  className,
  type,
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
  ...props
}: React.ComponentProps<"input">) {
  const { onCompositionStart: cs, onCompositionEnd: ce, onKeyDown: kd } =
    useComposition<HTMLInputElement>();

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full rounded-md border bg-transparent px-3 text-sm outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      onCompositionStart={(e) => {
        cs(e);
        onCompositionStart?.(e);
      }}
      onCompositionEnd={(e) => {
        ce(e);
        onCompositionEnd?.(e);
      }}
      onKeyDown={(e) => {
        const isComposing = (e.nativeEvent as any).isComposing;

        if (isComposing && e.key === "Enter") return;

        kd(e);
        onKeyDown?.(e);
      }}
      {...props}
    />
  );
}

export { Input };