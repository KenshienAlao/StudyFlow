import * as React from "react";
import { cn } from "@/lib";

export function Card({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}