import { statusConfig } from "@/config/status.config";
import { cn } from "@/lib/utils";
import { Task } from "@/model/task.model";

type StatusTaskModalProps = {
  task: Task;
  handleStatusUpdate: (status: string, id: number) => void;
};

export function StatusTaskModal({
  task,
  handleStatusUpdate,
}: StatusTaskModalProps) {
  return (
    <div className="absolute left-0 top-full mt-1.5 sm:left-full sm:top-0 sm:mt-0 sm:ml-1.5 w-40 rounded-xl border border-border/50 p-1.5 bg-card shadow-2xl ring-1 ring-black/5 z-50 animate-in fade-in zoom-in-95 duration-150 text-foreground origin-top-left">
      <div className="px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-display">
        Update Status
      </div>
      <div className="h-px bg-border/40 my-1" />

      {(Object.keys(statusConfig) as Array<keyof typeof statusConfig>).map(
        (statusKey) => {
          const config = statusConfig[statusKey];
          const OptionIcon = config.icon;
          const isSelected = task.status === statusKey;

          return (
            <button
              key={statusKey}
              type="button"
              onClick={() => handleStatusUpdate(statusKey, task.id!)}
              className={cn(
                "w-full flex items-center gap-2.5 px-2 py-1.5 text-xs rounded-lg cursor-pointer text-left transition-colors font-medium outline-none",
                isSelected
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted focus:bg-muted text-foreground/80 hover:text-foreground",
              )}
            >
              <OptionIcon
                className={cn("w-3.5 h-3.5 shrink-0", config.iconClass)}
              />
              <span className="flex-1">{config.label}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          );
        },
      )}
    </div>
  );
}
