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
import { statusConfig } from "@/config/status.config";
import { StatusTaskModal } from "./status-task.modal";

type BodyProps = {
  taskIsPending: boolean;
  taskError: Error | null;
  filteredTasks: Task[];
  priorityStyles: Record<string, string>;
  setOpenEditTask: (task: Task) => void;
  setOpenDeleteTask: (task: Task) => void;
  openStatusTask: Task | null;
  setOpenStatusTask: (task: Task | null) => void;
  handleStatusUpdate: (status: string, id: number) => void;
};

export function Body({
  taskIsPending,
  taskError,
  filteredTasks,
  priorityStyles,
  setOpenEditTask,
  setOpenDeleteTask,
  openStatusTask,
  setOpenStatusTask,
  handleStatusUpdate,
}: BodyProps) {
  const [activeMenuKey, setActiveMenuKey] = useState<string | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setActiveMenuKey(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative antialiased" ref={menuContainerRef}>
      {taskIsPending && (
        <div className="h-72 w-full flex flex-col items-center justify-center gap-4 bg-card/40 backdrop-blur-xs rounded-xl border border-border/40 shadow-xs transition-all duration-300">
          <div className="p-3 bg-muted/40 rounded-full border border-border/50 shadow-inner">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          </div>
        </div>
      )}

      {!taskIsPending && taskError && (
        <div className="p-5 bg-destructive/5 border border-destructive/10 rounded-xl text-destructive text-sm flex gap-3.5 items-start shadow-xs max-w-2xl mx-auto transition-all duration-300">
          <AlertCircle className="w-5 h-5 shrink-0 text-destructive/80 mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs text-destructive/80 leading-relaxed font-body">
              {taskError.message}
            </p>
          </div>
        </div>
      )}

      {!taskIsPending && !taskError && (
        <>
          {filteredTasks.length > 0 ? (
            <div className="grid grid-cols-1 gap-2.5">
              {filteredTasks.map((task) => {
                const statusInfo = statusConfig[task.status || "pending"];
                const StatusIcon = statusInfo.icon;

                const actionsMenuKey = `actions-${task.id}`;
                const isActionsOpen = activeMenuKey === actionsMenuKey;

                return (
                  <div
                    key={task.id}
                    className={cn(
                      "group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4 rounded-xl transition-all duration-200 outline-none",
                      "bg-card border border-border/40 hover:border-border/80 hover:bg-muted/5 shadow-xs hover:shadow-md",
                      isActionsOpen || openStatusTask?.id === task.id
                        ? "ring-1 ring-primary/30 border-primary/30 z-40"
                        : "z-10",
                    )}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-l-xl" />

                    <div className="absolute inset-0 bg-radial from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen rounded-xl" />

                    <div className="flex items-start gap-4 min-w-0 relative z-10 flex-1">
                      <div className="relative mt-0.5 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenStatusTask(task);
                          }}
                          className="group/status relative flex items-center justify-center p-1 rounded-md hover:bg-muted/60 transition-all active:scale-95 duration-150 outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          aria-label={`Current status: ${statusInfo.label}. Click to update.`}
                        >
                          <StatusIcon
                            className={cn(
                              "w-4.5 h-4.5 transition-all duration-200 transform group-hover/status:scale-110",
                              statusInfo.iconClass,
                            )}
                          />
                        </button>

                        {openStatusTask?.id === task.id && (
                          <>
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => setOpenStatusTask(null)}
                            />
                            <StatusTaskModal
                              task={task}
                              handleStatusUpdate={handleStatusUpdate}
                            />
                          </>
                        )}
                      </div>

                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                          <span
                            className={cn(
                              "text-sm font-semibold tracking-tight text-foreground transition-colors block truncate max-w-full font-display",
                              task.status === "done" &&
                                "text-muted-foreground/50 line-through decoration-muted-foreground/30 font-medium",
                            )}
                          >
                            {task.title}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-muted-foreground/80 font-body">
                          <span
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-md uppercase font-display border shadow-2xs transition-all duration-200",
                              statusInfo.pillClass,
                            )}
                          >
                            <span className="relative flex h-1.5 w-1.5 mr-1.5">
                              {task.status === "in-progress" && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              )}
                              <span
                                className={cn(
                                  "relative inline-flex rounded-full h-1.5 w-1.5",
                                  task.status === "done"
                                    ? "bg-emerald-500"
                                    : task.status === "in-progress"
                                      ? "bg-primary"
                                      : "bg-muted-foreground/40",
                                )}
                              ></span>
                            </span>
                            {statusInfo.label}
                          </span>

                          {task.subject && (
                            <>
                              <span className="opacity-30 select-none text-[10px]">
                                •
                              </span>
                              <span className="font-medium px-2 py-0.5 bg-muted/40 rounded-md text-foreground/80 border border-border/40 text-[11px] tracking-tight">
                                {task.subject}
                              </span>
                            </>
                          )}

                          {task.due_date && (
                            <>
                              <span className="opacity-30 select-none text-[10px]">
                                •
                              </span>
                              <span className="flex items-center gap-1.5 font-medium text-[11px] opacity-90 text-amber-600 dark:text-amber-400 bg-amber-500/5 dark:bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/10 dark:border-amber-500/20">
                                <Clock className="w-3.5 h-3.5 opacity-80 shrink-0" />
                                {task.due_date}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 relative z-20 border-t sm:border-t-0 border-border/30 pt-2.5 sm:pt-0">
                      {task.priority && task.priority !== "none" ? (
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase select-none font-display border shadow-2xs",
                            priorityStyles[task.priority] ||
                              "bg-muted/40 text-muted-foreground border-border/40",
                          )}
                        >
                          {task.priority}
                        </span>
                      ) : (
                        <div className="sm:block hidden" />
                      )}

                      <div className="relative flex items-center ml-auto sm:ml-0">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMenuKey(
                              isActionsOpen ? null : actionsMenuKey,
                            )
                          }
                          className={cn(
                            "p-1.5 rounded-lg text-muted-foreground/70 hover:bg-muted hover:text-foreground transition-all cursor-pointer",
                            "opacity-100 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 focus:bg-muted focus:text-foreground",
                            isActionsOpen &&
                              "bg-muted text-foreground opacity-100 ring-1 ring-border/50",
                          )}
                          aria-label="Task Actions"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {isActionsOpen && (
                          <div className="absolute right-0 top-full mt-1.5 w-40 rounded-xl border border-border/50 p-1 bg-card shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150 text-foreground origin-top-right">
                            <button
                              type="button"
                              onClick={() => {
                                setOpenEditTask(task);
                                setActiveMenuKey(null);
                              }}
                              className="w-full flex items-center gap-2 px-2.5 py-1.75 text-xs rounded-lg cursor-pointer text-left hover:bg-muted transition-colors focus:bg-muted outline-none font-medium"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-muted-foreground/80" />
                              <span>Edit details</span>
                            </button>

                            <div className="h-px bg-border/40 my-1" />

                            <button
                              type="button"
                              onClick={() => {
                                setOpenDeleteTask(task);
                                setActiveMenuKey(null);
                              }}
                              className="w-full flex items-center gap-2 px-2.5 py-1.75 text-xs rounded-lg cursor-pointer text-left text-destructive hover:bg-destructive/10 transition-colors focus:bg-destructive/10 outline-none font-medium"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete Task</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 sm:p-24 text-center flex flex-col items-center justify-center bg-card/20 rounded-2xl border border-dashed border-border/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-muted/40 flex items-center justify-center text-muted-foreground/50 border border-border/30 shadow-inner mb-4">
                <Inbox className="w-5.5 h-5.5" />
              </div>
              <div className="space-y-1.5 max-w-xs mx-auto">
                <p className="text-sm font-semibold text-foreground tracking-tight font-display">
                  No matches found
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed font-body">
                  Try clearing your search query or adjusting active structural
                  filters.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
