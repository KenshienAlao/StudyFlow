import { Input } from "@/components/ui";
import { cn } from "@/lib";
import { Search, SlidersHorizontal } from "lucide-react";

type SubHeaederProps = {
  searchTerm: string;
  filterPriority: string;
  setSearchTerm: (term: string) => void;
  setFilterPriority: (priority: string) => void;
};

export function SubHeader({
  searchTerm,
  filterPriority,
  setSearchTerm,
  setFilterPriority,
}: SubHeaederProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-card border border-border/80 p-1.5 rounded-lg shadow-xs backdrop-blur-md">
      <div className="relative flex-1 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50 group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="Filter by title, reference parameters or branch..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 h-8.5 text-xs border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none placeholder:text-muted-foreground/40 w-full"
        />
      </div>

      <div className="hidden sm:block h-5 w-px bg-border/60 self-center" />

      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
        <div className="items-center text-[11px] font-semibold text-muted-foreground/80 px-2 gap-1.5 hidden md:flex whitespace-nowrap">
          <SlidersHorizontal className="w-3 h-3 text-muted-foreground/60" />
          Priority:
        </div>
        {["all", "high", "medium", "low"].map((priority) => (
          <button
            key={priority}
            onClick={() => setFilterPriority(priority)}
            className={cn(
              "h-7 text-xs font-medium px-3 rounded-md transition-all whitespace-nowrap relative cursor-pointer",
              filterPriority === priority
                ? "bg-muted/60 text-foreground font-semibold shadow-xs border border-border/60"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20",
            )}
          >
            {priority === "all"
              ? "All Index"
              : priority.charAt(0).toUpperCase() + priority.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
