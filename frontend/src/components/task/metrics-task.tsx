import { cn } from "@/lib/utils";
import { Task } from "@/model/task.model";
import { Activity, Sparkles, TrendingUp } from "lucide-react";

type MetricsProps = {
  serverTasks: Task[];
  filteredTasks: Task[];
  highPriorityCount: number;
};

export function Metrics({
  serverTasks,
  filteredTasks,
  highPriorityCount,
}: MetricsProps) {
  return (
    <div className="space-y-4 lg:sticky lg:top-6">
      <div className="bg-card border border-border/80 rounded-lg p-4 sm:p-5 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground tracking-wider uppercase font-display mb-4">
          <Activity className="w-3.5 h-3.5 text-primary/80" />
          Workspace Health Metrics
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-border/40">
            <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
              Total Commits
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground font-display">
              {serverTasks.length}
            </span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-border/40">
            <span className="text-xs text-muted-foreground font-medium">
              Active Match
            </span>
            <span className="text-lg font-bold tracking-tight text-primary font-display">
              {filteredTasks.length}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground font-medium">
              Escalated Risk
            </span>
            <span
              className={cn(
                "text-lg font-bold tracking-tight font-display transition-colors",
                highPriorityCount > 0
                  ? "text-destructive"
                  : "text-muted-foreground/30",
              )}
            >
              {highPriorityCount}
            </span>
          </div>
        </div>

        <div className="pt-5 space-y-2">
          <div className="h-1.5 w-full bg-muted/60 rounded-full overflow-hidden flex p-0">
            <div
              className="bg-primary shadow-xs transition-all duration-600 cubic-bezier(0.16, 1, 0.3, 1)"
              style={{
                width: `${serverTasks.length ? (filteredTasks.length / serverTasks.length) * 100 : 0}%`,
              }}
            />
          </div>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground/80 font-body">
            <TrendingUp className="w-3 h-3 text-primary/80" />
            <span>Showing matches within real-time global matrices.</span>
          </div>
        </div>
      </div>

      <div className="bg-muted/15 border border-border/50 rounded-lg p-4 text-[11px] text-muted-foreground/90 leading-relaxed font-body relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 transition-all group-hover:bg-primary duration-200" />
        <div className="flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-foreground font-display block">
              Quick Navigation Tip
            </span>
            <p>
              Use specific keyword combinations inside the query field to sort
              items against target deadlines automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
