import {
  Bookmark,
  Calendar,
  Layers,
  Loader2,
  Plus,
  SlidersHorizontal,
  AlertCircle,
  CircleAlert,
} from "lucide-react";

import { Button, Input, Modal } from "@/components/ui";
import { FormEvent } from "react";
import { Task } from "@/model";

type EditTaskModalProps = {
  openEditTask: Task | null;
  setIsEditTask: (task: Task | null) => void;
  editTaskIsPending: boolean;
  handleEditTask: (e: FormEvent<HTMLFormElement>, id: number) => void;
  editError: Error | null;
};

export function EditTaskModal({
  openEditTask,
  setIsEditTask,
  editTaskIsPending,
  handleEditTask,
  editError,
}: EditTaskModalProps) {
  const labelClass =
    "text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display flex items-center gap-1";

  return (
    <Modal
      isOpen={!!openEditTask}
      onClose={() => setIsEditTask(null)}
      title="Edit Task"
      icon={<Plus className="size-3" />}
      disabled={editTaskIsPending}
    >
      <form
        onSubmit={(e) => handleEditTask(e, Number(openEditTask?.id))}
        className="p-4 sm:p-5"
      >
        <fieldset disabled={editTaskIsPending} className="space-y-4">
          <input type="hidden" name="priority" />

          {editError && (
            <div className="flex items-start gap-2.5 rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-destructive animate-in fade-in slide-in-from-top-2 duration-200">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <p className="font-body text-[11px] leading-relaxed opacity-90">
                {editError.message}
              </p>
            </div>
          )}

          <div className="space-y-1.5">
            <label className={labelClass}>
              <Bookmark className="size-3 text-primary/80" />
              Task Title
            </label>
            <Input
              name="title"
              defaultValue={openEditTask?.title}
              placeholder="Enter task title..."
              className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
            />
          </div>

          <div className="space-y-1.5">
            <label className={labelClass}>
              <Layers className="size-3 text-primary/80" />
              Subject
            </label>
            <Input
              name="subject"
              defaultValue={openEditTask?.subject}
              placeholder="e.g. Mathematics"
              className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
            />
          </div>

          {/* Adjusted Grid Structure for Cleaner Multi-Select Layout Positioning */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label className={labelClass}>
                <SlidersHorizontal className="size-3 text-primary/80" />
                Priority Level
              </label>

              <div className="relative group">
                <select
                  name="priority"
                  defaultValue={openEditTask?.priority}
                  className="w-full h-9.5 appearance-none rounded-md border border-border/60 bg-muted/10 px-3 pr-8 text-xs text-foreground shadow-xs transition-colors focus:bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-ring/80 cursor-pointer font-medium"
                >
                  <option value="none" className="bg-card text-foreground">
                    None
                  </option>
                  <option value="low" className="bg-card text-foreground">
                    Low
                  </option>
                  <option value="medium" className="bg-card text-foreground">
                    Medium
                  </option>
                  <option value="high" className="bg-card text-foreground">
                    High
                  </option>
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50 group-focus-within:text-primary transition-colors">
                  <svg
                    className="size-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className={labelClass}>
                <Calendar className="size-3 text-primary/80" />
                Due Date
              </label>
              <Input
                name="due_date"
                type="date"
                defaultValue={
                  openEditTask?.due_date
                    ? openEditTask.due_date.split("T")[0]
                    : ""
                }
                className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
              />
            </div>

            {/* Redesigned Status Select Input Layout Field */}
            <div className="space-y-1.5">
              <label className={labelClass}>
                <CircleAlert className="size-3 text-primary/80" />
                Status
              </label>

              <div className="relative group">
                <select
                  name="status"
                  defaultValue={openEditTask?.status || "pending"}
                  className="w-full h-9.5 appearance-none rounded-md border border-border/60 bg-muted/10 px-3 pr-8 text-xs text-foreground shadow-xs transition-colors focus:bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-ring/80 cursor-pointer font-medium"
                >
                  <option value="pending" className="bg-card text-foreground">
                    Pending
                  </option>
                  <option
                    value="in-progress"
                    className="bg-card text-foreground"
                  >
                    In Progress
                  </option>
                  <option value="done" className="bg-card text-foreground">
                    Done
                  </option>
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50 group-focus-within:text-primary transition-colors">
                  <svg
                    className="size-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-end gap-2.5 border-t border-border/40 pt-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsEditTask(null)}
              className="h-9 rounded-md border border-border/40 px-4 text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex h-9 items-center gap-1.5 rounded-md px-4 text-xs font-semibold shadow-xs active:scale-[0.98]"
            >
              {editTaskIsPending ? (
                <Loader2 className="size-3 animate-spin" />
              ) : (
                "Update Task"
              )}
            </Button>
          </div>
        </fieldset>
      </form>
    </Modal>
  );
}
