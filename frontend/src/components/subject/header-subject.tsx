import { Plus } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-5 pb-6 mb-10 border-b border-border select-none">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Subjects
        </h1>
        <p className="text-xs font-medium text-muted-foreground max-w-sm leading-relaxed">
          Manage your subjects, categories, and progress tracking.
        </p>
      </div>

      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "h-10 w-full sm:w-auto px-4 text-xs font-bold tracking-wide rounded-xl",
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
          "shadow-sm hover:shadow-md hover:shadow-primary/20",
          "transition-all duration-200 active:scale-[0.98]",
        )}
      >
        <Plus className="w-3.5 h-3.5 mr-1.5 stroke-3" />
        Create Subject
      </Button>
    </div>
  );
}
