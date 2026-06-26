import { AlertCircle, Loader2, Trash2 } from "lucide-react";
import { Button, Modal } from "@/components/ui";
import { Task } from "@/model";

export interface DeleteConfirmationModalProps {
  openDeleteTask: Task | null;
  setOpenDeleteTask: (openDeleteTask: Task | null) => void;
  isDeleteTaskPending: boolean;
  errorDeleteTask: Error | null;
  handleConfirmDelete: (id: number) => void;
}

export function DeleteTaskModal({
  openDeleteTask,
  setOpenDeleteTask,
  isDeleteTaskPending,
  errorDeleteTask,
  handleConfirmDelete,
}: DeleteConfirmationModalProps) {
  return (
    <Modal
      isOpen={!!openDeleteTask}
      onClose={() => setOpenDeleteTask(null)}
      title="Delete Task"
      icon={<Trash2 className="size-3" />}
      disabled={isDeleteTaskPending}
    >
      <div className="p-4 sm:p-5">
        <div className="text-sm text-muted-foreground mb-4">
          Are you sure you want to permanently delete this record?
        </div>

        <div className="flex items-center gap-3 p-3 mb-4 rounded-xl bg-muted/10 border border-border/60">
          <div className="w-2.5 h-2.5 rounded-full shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate mt-0.5">
              {openDeleteTask?.title}
            </p>
          </div>
        </div>

        {errorDeleteTask && (
          <div className="p-3 mb-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-normal">{errorDeleteTask.message}</span>
          </div>
        )}

        <div className="mt-5 flex items-center justify-end gap-2.5 border-t border-border/40 pt-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpenDeleteTask(null)}
            disabled={isDeleteTaskPending}
            className="h-9 rounded-md border border-border/40 px-4 text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => handleConfirmDelete(Number(openDeleteTask?.id))}
            disabled={isDeleteTaskPending}
            variant="destructive"
            className="flex h-9 items-center gap-1.5 rounded-md px-4 text-xs font-semibold shadow-xs active:scale-[0.98]"
          >
            {isDeleteTaskPending ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              "Confirm"
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
