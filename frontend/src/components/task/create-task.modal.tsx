import {
  Bookmark,
  Calendar,
  Layers,
  Loader2,
  Plus,
  SlidersHorizontal,
  AlertCircle,
  FileText,
} from "lucide-react";

import { FormEvent } from "react";
import { Modal } from "../ui/modal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type CreateTaskModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  creatingTaskIsPending: boolean;
  handleCreateTask: (e: FormEvent<HTMLFormElement>) => void;
  createError: Error | null;
};

export function CreateTaskModal({
  isModalOpen,
  setIsModalOpen,
  creatingTaskIsPending,
  handleCreateTask,
  createError,
}: CreateTaskModalProps) {
  const labelClass =
    "text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display flex items-center gap-1";

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Create Task"
      icon={<Plus className="size-3" />}
      disabled={creatingTaskIsPending}
    >
      <form onSubmit={handleCreateTask} className="p-4 sm:p-5">
        <fieldset disabled={creatingTaskIsPending} className="space-y-4">
          <input type="hidden" name="priority" />

          {createError && (
            <div className="flex items-start gap-2.5 rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-destructive animate-in fade-in slide-in-from-top-2 duration-200">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <p className="font-body text-[11px] leading-relaxed opacity-90">
                {createError.message}
              </p>
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="task-title" className={labelClass}>
              <Bookmark className="size-3 text-primary/80" />
              Task Title
            </label>
            <Input
              name="title"
              required
              placeholder="Enter task title..."
              className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className={labelClass}>
              <Layers className="size-3 text-primary/80" />
              Subject
            </label>
            <Input
              name="subject"
              placeholder="e.g. Mathematics"
              className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="notes" className={labelClass}>
              <FileText className="size-3 text-primary/80" />
              Notes
            </label>
            <textarea
              id="notes"
              aria-label="note"
              name="note"
              rows={3}
              placeholder="Optional: Add context notes, operational details, or milestones specifications..."
              className="w-full rounded-md border border-border/60 bg-muted/10 p-3 text-xs shadow-xs transition-colors focus:bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-ring/80 text-foreground placeholder:text-muted-foreground/50 resize-none min-h-[76px]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="priority-level" className={labelClass}>
                <SlidersHorizontal className="size-3 text-primary/80" />
                Priority Level
              </label>

              <div className="relative group">
                <select
                  id="priority-level"
                  name="priority"
                  defaultValue="none"
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
              <label htmlFor="due-date" className={labelClass}>
                <Calendar className="size-3 text-primary/80" />
                Due Date
              </label>
              <Input
                id="due-date"
                name="due_date"
                type="date"
                className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-end gap-2.5 border-t border-border/40 pt-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
              className="h-9 rounded-md border border-border/40 px-4 text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground"
            >
              Cancel
            </Button>
            <Button
              aria-label="Create Task"
              type="submit"
              className="flex h-9 items-center gap-1.5 rounded-md px-4 text-xs font-semibold shadow-xs active:scale-[0.98]"
            >
              {creatingTaskIsPending ? (
                <Loader2 className="size-3 animate-spin" />
              ) : (
                "Create Task"
              )}
            </Button>
          </div>
        </fieldset>
      </form>
    </Modal>
  );
}
