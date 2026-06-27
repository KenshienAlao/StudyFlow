import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Task } from "@/model/task.model";
import {
  AlertCircle,
  Clock,
  Inbox,
  Loader2,
  MoreVertical,
  Edit2,
  Trash2,
} from "lucide-react";

type BodyProps = {
  taskIsPending: boolean;
  taskError: Error | null;
  filteredTasks: Task[];
  priorityStyles: Record<string, string>;
  setOpenEditTask: (task: Task) => void;
  setOpenDeleteTask: (task: Task) => void;
};

export function Body({
  taskIsPending,
  taskError,
  filteredTasks,
  priorityStyles,
  setOpenEditTask,
  setOpenDeleteTask,
}: BodyProps) {
  const [activeMenuTaskId, setActiveMenuTaskId] = useState<number | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setActiveMenuTaskId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {taskIsPending ? (
        <div className="h-64 flex flex-col items-center justify-center gap-3 bg-card rounded-lg border border-border/60 shadow-xs">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
          <p className="text-xs font-medium text-muted-foreground animate-pulse">
            Synchronizing tracking systems...
          </p>
        </div>
      ) : taskError ? (
        <div className="p-4 bg-destructive/5 border border-destructive/15 rounded-lg text-destructive text-xs flex gap-3 items-center shadow-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p className="font-medium">
            Workspace sync disrupted:{" "}
            {taskError.message || "Network layer breakdown."}
          </p>
        </div>
      ) : (
        <div
          ref={menuContainerRef}
          className="bg-card rounded-lg border border-border/80 shadow-xs"
        >
          {filteredTasks.length > 0 ? (
            <div className="divide-y divide-border/40">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={cn(
                    "p-4 flex items-center justify-between gap-4 transition-all duration-200 hover:bg-muted/10 group isolate",
                    activeMenuTaskId === task.id
                      ? "z-30 relative"
                      : "z-10 relative",
                  )}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-l-lg" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-r from-transparent to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-r-lg" />

                  <div className="flex items-center gap-3.5 min-w-0 relative z-10">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full shrink-0 transition-all duration-300 ring-4 ring-transparent group-hover:ring-card",
                        task.priority === "high"
                          ? "bg-destructive shadow-sm shadow-destructive/50"
                          : "bg-primary shadow-sm shadow-primary/50",
                      )}
                    />

                    <div className="min-w-0 space-y-0.5">
                      <span className="text-xs sm:text-sm font-semibold tracking-tight text-foreground transition-colors block truncate max-w-[260px] sm:max-w-[450px] md:max-w-none">
                        {task.title}
                      </span>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground font-body">
                        {task.subject && (
                          <>
                            <span className="font-medium px-1.5 py-0.5 bg-muted/40 rounded text-muted-foreground/90 border border-border/30">
                              {task.subject}
                            </span>
                            <span className="opacity-40 select-none">•</span>
                          </>
                        )}
                        {task.due_date && (
                          <span className="flex items-center gap-1 font-medium opacity-80">
                            <Clock className="w-3 h-3 opacity-70" />
                            {task.due_date}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 relative z-20">
                    {task.priority !== "none" && (
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wide uppercase select-none font-display relative z-10",
                          priorityStyles[
                            task.priority as keyof typeof priorityStyles
                          ] || priorityStyles.low,
                        )}
                      >
                        {task.priority}
                      </span>
                    )}

                    <div className="relative flex items-center">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveMenuTaskId(
                            activeMenuTaskId === task.id ? null : task.id!,
                          )
                        }
                        className={cn(
                          "p-1 rounded-md text-muted-foreground/60 hover:bg-muted hover:text-foreground transition-colors cursor-pointer sm:opacity-0 group-hover:opacity-100 focus:opacity-100 relative z-30",
                          activeMenuTaskId === task.id &&
                            "bg-muted text-foreground opacity-100",
                        )}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {activeMenuTaskId === task.id && (
                        <div className="absolute right-0 top-9 w-36 rounded-lg border border-border/60 p-1 bg-card shadow-xl z-50 animate-in fade-in zoom-in-95 duration-100 text-foreground">
                          <button
                            type="button"
                            onClick={() => setOpenEditTask(task)}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-md cursor-pointer text-left hover:bg-muted transition-colors focus:bg-muted outline-none font-medium"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-muted-foreground/80" />
                            <span>Edit details</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setOpenDeleteTask(task)}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-md cursor-pointer text-left text-destructive hover:bg-destructive/10 transition-colors focus:bg-destructive/10 outline-none font-medium border-t border-border/30 mt-1 pt-1.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete Task</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 sm:p-20 text-center flex flex-col items-center justify-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground/60 border border-border/40 shadow-xs">
                <Inbox className="w-5 h-5" />
              </div>
              <div className="space-y-1 max-w-xs">
                <p className="text-xs font-bold text-foreground font-display">
                  No tracking entries found
                </p>
                <p className="text-[11px] text-muted-foreground leading-normal font-body">
                  Adjust search query criteria or build custom actions inside
                  this active scope.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
