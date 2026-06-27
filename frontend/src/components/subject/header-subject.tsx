import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  return (
    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-border/60 select-none">
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-2.5 relative z-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-display">
            Subjects
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl font-body leading-relaxed">
          Manage your academic subjects, assign structural categories, and
          evaluate target milestone performance indicators.
        </p>
      </div>

      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "h-9.5 w-full md:w-auto px-4 text-xs font-semibold rounded-md",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "shadow-sm hover:shadow-md transition-all active:scale-[0.98]",
          "flex items-center justify-center gap-2 font-display tracking-tight shrink-0 group",
        )}
      >
        <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
        Create Subject
      </Button>
    </div>
  );
}
