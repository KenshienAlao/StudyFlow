import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib";

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 items-center rounded-full border border-transparent shadow-xs outline-none transition-all data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="block size-4 rounded-full bg-background transition-transform data-[state=checked]:translate-x-[calc(100%-2px)]" />
    </SwitchPrimitive.Root>
  );
}